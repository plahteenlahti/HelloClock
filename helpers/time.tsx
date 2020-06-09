export const to12hClock = (hour: number): number => {
  return hour > 12 ? hour - 12 : hour;
};

type TimeObject = {
  hours: number;
  minutes: number;
  seconds: number;
};

export const getTime = (): TimeObject => {
  const date = new Date();
  const hours = (to12hClock(date.getHours()) / 12) * 360;
  const minutes = (date.getMinutes() / 60) * 360;
  const seconds = (date.getSeconds() / 60) * 360;
  return { hours, minutes, seconds };
};

export const getDateTimeInAngles = (dateTime: Date): TimeObject => {
  const hours = (to12hClock(dateTime.getHours()) / 12) * 360;
  const minutes = (dateTime.getMinutes() / 60) * 360;
  const seconds = (dateTime.getSeconds() / 60) * 360;
  return { hours, minutes, seconds };
};
