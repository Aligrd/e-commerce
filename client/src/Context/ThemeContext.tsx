import { createContext } from "react";

type ThemeType = "light" | "dark"

const ThemeContext = createContext<ThemeType>("light");

export default ThemeContext;
