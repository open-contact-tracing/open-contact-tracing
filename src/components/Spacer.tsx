import * as React from "react";
import { View } from "react-native";
import typography, { spacing } from "../utils/typography";
type size = keyof spacing;
type Props = {
  height?: size;
  width?: size;
};

export default function Spacer({ width, height }: Props) {
  return (
    <View
      style={{
        height: height ? typography.spacing[height] : undefined,
        width: width ? typography.spacing[width] : undefined,
      }}
    />
  );
}
