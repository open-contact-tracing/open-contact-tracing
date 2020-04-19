/*
 This defines the color scheme that is being used throughout the app.
 It exports two schemes; `dark` and `light`.
*/

export type color = string;
export type colors = {
  dark: boolean;
  label: color;
  secondaryLabel: color;
  systemFill: color;
  secondarySystemFill: color;
  background: color;
  secondaryBackground: color;
  underlayColor: color;
};

export const light: colors = {
  dark: false,
  label: "#000",
  secondaryLabel: "rgba(60, 60, 67, 0.6)",
  systemFill: "rgba(120, 120, 128, 0.2)",
  secondarySystemFill: "rgba(120, 120, 128, 0.16)",
  background: "#fff",
  secondaryBackground: "#f2f2f7ff",
  underlayColor: "rgba(0,0,0,0.2)",
};

export const dark: colors = {
  dark: true,
  label: "#fff",
  secondaryLabel: "rgba(235, 235, 245, 0.6)",
  systemFill: "rgba(120, 120, 128, 0.36)",
  secondarySystemFill: "rgba(120, 120, 128, 0.32)",
  background: "#000",
  secondaryBackground: "rgb(28,28,30)",
  underlayColor: "rgba(255,255,255,0.2)",
};
