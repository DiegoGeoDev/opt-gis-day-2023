import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createMapSlice } from "./slices/mapSlice";

import { Map, View } from "ol";

export type MapStoreType = {
  map: Map | null;
  view: View | null;
  updateMap: (map: Map) => void;
  updateView: (view: View) => void;
};

export const useMapStore = create<MapStoreType>()(
  devtools((set, get) => ({
    ...createMapSlice(set, get),
  }))
);
