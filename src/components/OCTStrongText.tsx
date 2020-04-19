import * as React from "react";
import OCTText, { OCTTextProps } from "./OCTText";

export default function OCTStrongText({ style, ...restProps }: OCTTextProps) {
  return <OCTText style={[{ fontWeight: "700" }, style]} {...restProps} />;
}
