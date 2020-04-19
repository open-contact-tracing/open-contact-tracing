import { useColorScheme } from "react-native";
import { dark, light, colors } from "../utils/colors";

export default function useColors(): colors {
  return useColorScheme() == "dark" ? dark : light;
}
