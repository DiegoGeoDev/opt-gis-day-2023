import OlFill from "ol/style/Fill";
import OlStroke from "ol/style/Stroke";
import OlStyle from "ol/style/Style";
import OlCircle from "ol/style/Circle";
import OlIcon from "ol/style/Icon";

import andyIcon from "../../assets/andy.svg";

const pointFill = new OlFill({
  color: "rgba(16, 185, 129, 0.5)",
});

const pointStroke = new OlStroke({
  color: "rgba(16, 185, 129, 1)",
  width: 5,
});

export const iconStyle = new OlStyle({
  image: new OlIcon({
    src: andyIcon,
    scale: 0.15,
  }),
});

export const pointStyle = new OlStyle({
  image: new OlCircle({
    radius: 14,
    fill: pointFill,
    stroke: pointStroke,
  }),
});
