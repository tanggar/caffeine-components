import toKebabCase from "lodash.kebabcase";
import palette from "./palette";

const colors = {
  backgroundDisabled: palette.neutral[700],
  backgroundPage: palette.blue[900],
  backgroundSurface: palette.neutral[100],
  contentDisabled: palette.neutral[100],
  contentPrimary: palette.neutral[900],
  contentSecondary: palette.neutral[700],
  accentPrimary: palette.blue[800],
  accentPrimaryHover: palette.blue[900],
  accentSecondary: palette.green[500],
  accentSecondaryHover: palette.green[700],
};

const tailwindColors = Object.entries(colors).reduce(
  (accumulator, [key, value]) => {
    return {
      ...accumulator,
      [toKebabCase(key)]: value,
    };
  },
  {},
);

export default tailwindColors;
