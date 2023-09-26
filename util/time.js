import moment from "moment-timezone";

export const getCurrentTimeInWIB = () => {
  const currentTime = moment().tz("Asia/Jakarta").format("HH:mm:ss");
  return currentTime;
};
