export const sec2time = (timeInSeconds) => {
  const days = Math.floor(timeInSeconds / 60 / 60 / 24).toString();
  const hours = (Math.floor(timeInSeconds / 60 / 60) % 24).toString();
  const minutes = (Math.floor(timeInSeconds / 60) % 60).toString();
  const seconds = (timeInSeconds % 60).toString();
  return [days, hours, minutes, seconds];
};
