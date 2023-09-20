import OlFill from "ol/style/Fill";
import OlStroke from "ol/style/Stroke";
import OlStyle from "ol/style/Style";
import OlCircle from "ol/style/Circle";

const pointFill = new OlFill({
  color: "rgba(0, 0, 0, 0.5)",
});

const pointStroke = new OlStroke({
  color: "rgba(0, 0, 0, 1)",
  width: 5,
});

export const pointStyle = new OlStyle({
  image: new OlCircle({
    radius: 14,
    fill: pointFill,
    stroke: pointStroke,
  }),
});
