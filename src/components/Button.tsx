import * as React from "react";
import { TouchableHighlight, View, GestureResponderEvent } from "react-native";
import useColors from "../hooks/useColors";
import OCTMediumText from "./OCTMediumText";
import typography from "../utils/typography";

export default function Button({
  onPress,
  children,
}: {
  onPress: (event: GestureResponderEvent) => void;
  children: string;
}) {
  let colors = useColors();
  return (
    <TouchableHighlight
      style={{ borderRadius: 50, overflow: "hidden" }}
      onPress={onPress}
      underlayColor={colors.underlayColor}
    >
      <View
        style={{
          backgroundColor: colors.systemFill,
          paddingHorizontal: 30,
          paddingVertical: 12,
        }}
      >
        <OCTMediumText
          color={colors.label}
          size={typography.sizes.label}
          align="center"
          style={{ letterSpacing: -0.02, lineHeight: 22 }}
        >
          {children}
        </OCTMediumText>
      </View>
    </TouchableHighlight>
  );
}
