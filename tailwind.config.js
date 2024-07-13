/** @type {import('tailwindcss').Config} */

import { black, blue, green, neutral, white } from "./src/tokens/palette";
import colors from "./src/tokens/colors";
import spacing from "./src/tokens/spacing";
import borderRadius from "./src/tokens/border-radius";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black,
      blue,
      green,
      neutral,
      white,
      ...colors,
    },
    spacing,
    borderRadius,
  },
  plugins: [],
};
