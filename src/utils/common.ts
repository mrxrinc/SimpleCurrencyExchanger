import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const formatNumber = (number?: Number | string) => {
  return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
};
