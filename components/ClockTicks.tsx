import React from "react";
import { G, Line, Text } from "react-native-svg";
import { polarToCartesian } from "../helpers/geometry";
import styled from "styled-components/native";

type Props = {
  radius: number;
  center: number;
  minutes: number;
  hours: number;
};

const ClockTicks = (props: Props) => {
  const { radius, center, minutes, hours } = props;
  const minutesArray = new Array(minutes).fill(1);
  const hoursArray = new Array(hours).fill(1);

  const minuteSticks = minutesArray.map((minute, index) => {
    const start = polarToCartesian(center, center, radius, index * 5);
    const end = polarToCartesian(center, center, radius, index * 5);
    return (
      <Minute
        strokeWidth={2}
        strokeLinecap="round"
        key={index}
        x1={start.x}
        x2={end.x}
        y1={start.y}
        y2={end.y}
      />
    );
  });

  const hourSticks = hoursArray.map((hour, index) => {
    const start = polarToCartesian(center, center, radius - 10, index * 30);
    const end = polarToCartesian(center, center, radius, index * 30);
    const time = polarToCartesian(center, center, radius - 35, index * 30);

    return (
      <G key={index}>
        <HourLine
          stroke="white"
          strokeWidth={3}
          strokeLinecap="round"
          x1={start.x}
          x2={end.x}
          y1={start.y}
          y2={end.y}
        />
        <HourNumber
          textAnchor="middle"
          fontSize="17"
          fontWeight="bold"
          alignmentBaseline="central"
          x={time.x}
          y={time.y}>
          {index === 0 ? 12 : index}
        </HourNumber>
      </G>
    );
  });

  return (
    <G>
      {minuteSticks}
      {hourSticks}
    </G>
  );
};

export default ClockTicks;

const Minute = styled(Line).attrs(({ theme }) => ({
  stroke: theme.secondaryColor,
}))``;

const HourLine = styled(Line).attrs(({ theme }) => ({
  stroke: theme.secondaryColor,
}))``;

const HourNumber = styled(Text).attrs(({ theme }) => ({
  fill: theme.primaryColor,
}))``;
