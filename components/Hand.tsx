import React from "react";
import { Line } from "react-native-svg";
import { polarToCartesian } from "../helpers/geometry";

type Props = {
  center: number;
  radius: number;
  angle: number;
  strokeWidth: string;
  stroke: string;
  strokeOpacity: string;
};

const Hand = (props: Props) => {
  const {
    center,
    radius,
    angle,
    stroke,
    strokeWidth,
    strokeOpacity = "1",
  } = props;
  const { x, y } = polarToCartesian(center, center, radius, angle);

  return (
    <Line
      x1={center}
      y1={center}
      x2={x}
      y2={y}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeOpacity={strokeOpacity}
      stroke={stroke}
    />
  );
};

export default Hand;
