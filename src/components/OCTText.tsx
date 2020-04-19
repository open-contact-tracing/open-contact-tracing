import * as React from "react";
import { Text, TextProps } from "react-native";
import { color } from "../utils/colors";

export type OCTTextProps = TextProps & {
  color: color;
  size?: number;
  align?: "auto" | "left" | "right" | "center" | "justify";
  children: React.ReactNode;
};

export default function OCTText({
  style,
  color,
  size,
  align,
  ...restProps
}: OCTTextProps) {
  return (
    <Text
      style={[{ color, fontSize: size, textAlign: align }, style]}
      {...restProps}
    />
  );
}
