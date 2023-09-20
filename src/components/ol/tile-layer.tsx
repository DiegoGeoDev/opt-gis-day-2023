import { useEffect } from "react";

import { Tile as OlTile } from "ol/layer";
import { OSM, XYZ } from "ol/source";

import { useMapStore } from "@/stores/mapStore";

type TileLayerProps = {
  source: OSM | XYZ;
  zIndex: number;
};

export function TileLayer({ source, zIndex }: TileLayerProps) {
  const [map] = useMapStore((state) => [state.map]);

  useEffect(() => {
    if (!map) return;

    const tileLayerObject = new OlTile({
      source,
      zIndex,
    });
    map.addLayer(tileLayerObject);
    tileLayerObject.setZIndex(zIndex);

    return () => {
      if (map) {
        map.removeLayer(tileLayerObject);
      }
    };
  }, [map]);

  return null;
}
