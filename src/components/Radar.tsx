import * as React from "react";
import Svg, { Circle, G } from "react-native-svg";
import useColors from "../hooks/useColors";
import { View } from "react-native";

const INNER_DOT_SIZE = 26;

export default function Radar() {
  let color = "#2F80ED";
  let colors = useColors();
  return (
    <View>
      <Svg
        width="360"
        height="360"
        viewBox="0 0 360 360"
        fill="none"
        style={{ width: 360, height: 360 }}
      >
        <Circle opacity="0.08" cx="180" cy="180" r="131.5" stroke={color} />
        <Circle opacity="0.04" cx="180" cy="180" r="179.5" stroke={color} />
        <Circle opacity="0.12" cx="180" cy="180" r="79.5" stroke={color} />
        <G opacity="0.1">
          <Circle cx="325" cy="127" r="4" fill={color} />
          <Circle cx="46" cy="51" r="4" fill={color} />
          <Circle cx="230" cy="47" r="4" fill={color} />
          <Circle cx="65" cy="139" r="4" fill={color} />
          <Circle cx="34" cy="251" r="4" fill={color} />
          <Circle cx="281" cy="235" r="4" fill={color} />
        </G>
        <Circle opacity="0.1" cx="180" cy="176" r="28" fill={color} />
      </Svg>
      <View
        style={{
          position: "absolute",
          top: 176 - INNER_DOT_SIZE / 2,
          left: 180 - INNER_DOT_SIZE / 2,
          width: INNER_DOT_SIZE,
          height: INNER_DOT_SIZE,
          borderRadius: INNER_DOT_SIZE / 2,
          backgroundColor: color,
          borderColor: colors.background,
          borderWidth: 4,

          shadowColor: color,
          shadowOffset: { width: 0, height: 0 },
          shadowRadius: 8,
          shadowOpacity: 0.6,
        }}
      />
    </View>
  );
}
