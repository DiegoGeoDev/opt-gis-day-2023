import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";

export const OpenStreetMap = new OSM();

export const cartodbDark = new XYZ({
  url: "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" + "",
});

export const cartodbLight = new XYZ({
  url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" + "",
});

export const cartodbVoyager = new XYZ({
  url:
    "https://a.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" +
    "",
});
