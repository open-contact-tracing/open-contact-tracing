import * as React from "react";
import OCTText, { OCTTextProps } from "./OCTText";

export default function OCTSemiBoldText({ style, ...restProps }: OCTTextProps) {
  return (
    <OCTText style={[{ fontFamily: "Inter-SemiBold" }, style]} {...restProps} />
  );
}
