import { StoreApi } from "zustand";

import { MapStoreType } from "../mapStore";

export const createMapSlice = (
  set: StoreApi<MapStoreType>["setState"],
  _get: StoreApi<MapStoreType>["getState"]
): MapStoreType => ({
  map: null,
  view: null,
  updateMap: (map) => set({ map }),
  updateView: (view) => set({ view }),
});
