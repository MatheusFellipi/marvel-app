import { useFonts as font } from "@expo-google-fonts/poppins";
import { fonts } from "../config/font";

export const useFonts = () => {
  let [fontsLoaded, fontError] = font(fonts);
  return { fontsLoaded, fontError };
};
