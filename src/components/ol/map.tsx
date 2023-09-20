import { useEffect } from "react";

import { Map as OlMap, View as OlView } from "ol";
// import { defaults as defaultControls } from "ol/control";
import { fromLonLat } from "ol/proj";
import { Coordinate } from "ol/coordinate";
import { MapOptions } from "ol/Map";
import { ViewOptions } from "ol/View";

import { useMapStore } from "@/stores/mapStore";

import "ol/ol.css";

type MapProps = {
  zoom: number;
  center: Coordinate;
};

export function Map({ zoom, center }: MapProps) {
  const [map, updateMap, updateView] = useMapStore((state) => [
    state.map,
    state.updateMap,
    state.updateView,
  ]);

  useEffect(() => {
    const viewOptios: ViewOptions = {
      zoom,
      center: fromLonLat(center),
      maxZoom: 20,
    };
    const viewObject = new OlView(viewOptios);

    const mapOptions: MapOptions = {
      view: viewObject,
      layers: [],
      controls: [], // defaultControls(),
      overlays: [],
      target: "map",
    };
    const mapObject = new OlMap(mapOptions);

    updateView(viewObject);
    updateMap(mapObject);

    return () => mapObject.setTarget(undefined);
  }, []);

  useEffect(() => {
    if (!map) return;
    map.getView().setZoom(zoom);
  }, [zoom]);

  // useEffect(() => {
  //   if (!map) return;

  //   map.getView().setCenter(fromLonLat(center));
  // }, [center]);

  return (
    <div id="map" className="h-full w-full [&>div]:rounded-sm shadow-md" />
  );
}
