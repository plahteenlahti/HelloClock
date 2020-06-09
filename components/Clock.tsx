import React, { useState } from "react";
import { Dimensions } from "react-native";
import Svg from "react-native-svg";
import { getTime } from "../helpers/time";
import ClockTicks from "./ClockTicks";
import Hand from "./Hand";
import { useInterval } from "../helpers/hooks";
import styled from "styled-components";

const { width } = Dimensions.get("window");
const diameter = width - 40;
const center = width / 2;
const radius = diameter / 2;
const hourTickCount = 12;
const minuteTickCount = 12 * 6;

const ClockFace = () => {
  let [time, setTime] = useState(getTime);

  useInterval(() => {
    setTime(getTime);
  }, 100);

  return (
    <Svg height={width} width={width}>
      <ClockTicks
        minutes={minuteTickCount}
        hours={hourTickCount}
        radius={radius}
        center={center}
      />
      <Seconds
        angle={time.seconds}
        center={center}
        radius={radius}
        stroke="red"
        strokeWidth="1"
      />
      <Minutes
        angle={time.minutes}
        center={center}
        radius={radius}
        stroke="white"
        strokeWidth="5"
      />
      <Hours
        angle={time.hours}
        center={center}
        radius={radius}
        strokeWidth="5"
      />
    </Svg>
  );
};

export default ClockFace;

const Seconds = styled(Hand).attrs(({ theme }) => ({
  stroke: theme.accentColor,
  strokeOpacity: "1",
}))``;

const Minutes = styled(Hand).attrs(({ theme }) => ({
  stroke: theme.primaryColor,
  strokeOpacity: "0.5",
}))``;

const Hours = styled(Hand).attrs(({ theme }) => ({
  stroke: theme.primaryColor,
  strokeOpacity: "0.8",
}))``;
