import { DefaultTheme } from "styled-components/native";

declare module "styled-components" {
  export interface DefaultTheme {
    style: string;
    bgColor: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  style: "light",
  bgColor: "white",
  primaryColor: "#333",
  secondaryColor: "#555",
  accentColor: "#4a5aef",
};

export const darkTheme: DefaultTheme = {
  style: "dark",
  bgColor: "#111",
  primaryColor: "#fff",
  secondaryColor: "#CACACA",
  accentColor: "#4aefd5",
};
