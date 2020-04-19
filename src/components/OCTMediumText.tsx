import * as React from "react";
import OCTText, { OCTTextProps } from "./OCTText";

export default function OCTMediumText({ style, ...restProps }: OCTTextProps) {
  return (
    <OCTText style={[{ fontFamily: "Inter-Medium" }, style]} {...restProps} />
  );
}
