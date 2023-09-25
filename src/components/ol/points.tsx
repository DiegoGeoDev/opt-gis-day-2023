import { useEffect } from "react";

import OlVectorLayer from "ol/layer/Vector";
import OlVectorSoruce from "ol/source/Vector";
import { MapBrowserEvent, Feature as OlFeature } from "ol";
import { Point } from "ol/geom";
import { Coordinate } from "ol/coordinate";

import { iconStyle } from "./points-style";

import { useToast } from "../ui/use-toast";

import { useMapStore } from "@/stores/mapStore";
import { useQuizStore } from "@/stores/quizStore";

type PointType = {
  id: string;
  poi: Coordinate;
};

type PointsProps = {
  points: PointType[];
  epsg: string;
  minZoom?: number;
  maxZoom?: number;
  hitTolerance?: number;
  zIndex: number;
};

export function Points({
  points,
  epsg,
  minZoom,
  maxZoom,
  hitTolerance,
  zIndex,
}: PointsProps) {
  const [map] = useMapStore((state) => [state.map]);

  const [quizzes, updateIsMapComplete, updateIsDisabled] = useQuizStore(
    (state) => [
      state.quizzes,
      state.updateIsMapComplete,
      state.updateIsDisabled,
    ]
  );

  const { toast } = useToast();

  useEffect(() => {
    if (!map) return;

    const vectorLayerObject = new OlVectorLayer({
      source: new OlVectorSoruce(),
      style: iconStyle, //pointStyle,
      zIndex,
      minZoom,
      maxZoom,
    });
    map.addLayer(vectorLayerObject);
    vectorLayerObject.setZIndex(zIndex);

    points.forEach((point) => {
      const { id, poi } = point;

      const pointObject = new Point(poi).transform(epsg, "EPSG:3857");

      const featureObject = new OlFeature({
        geometry: pointObject,
      });
      featureObject.setId(id);

      vectorLayerObject.getSource()?.addFeature(featureObject);
    });

    function handleMapSingleClick(e: MapBrowserEvent<any>) {
      map?.forEachFeatureAtPixel(
        e.pixel,
        function (feature, _layer) {
          // console.log(e.pixel);
          // console.log(layer);
          const quiz = quizzes.find((quiz) => quiz.id === feature.getId());

          if (!quiz) return;

          if (quiz.isMapComplete) return;

          if (!quiz.nextQuiz) {
            toast({
              description: `${quiz.dialog.title} Muito bem você acertou todas as perguntas e encontrou todas as curiosidades! 🤓`,
            });

            updateIsMapComplete(quiz.id);

            return;
          }

          updateIsMapComplete(quiz.id);
          updateIsDisabled(quiz.nextQuiz);

          toast({
            description: `${quiz.dialog.title} Uma nova curiosidade e pergunta foram liberadas! 🌎`,
          });
        },
        {
          layerFilter: function (layer) {
            return layer === vectorLayerObject;
          },
          hitTolerance,
        }
      );
    }

    map.on("singleclick", handleMapSingleClick);

    return () => {
      if (map) {
        map.un("singleclick", handleMapSingleClick);
        map.removeLayer(vectorLayerObject);
      }
    };
  }, [map, points]);

  return null;
}
