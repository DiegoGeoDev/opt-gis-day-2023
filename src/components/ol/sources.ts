import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";

export const OpenStreetMap = new OSM();

export const cartodbDark = new XYZ({
  url: "http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png" + "",
});
