import { deepMerge, deepFreeze } from "grommet/utils";
import { aruba } from 'grommet-theme-aruba';

export const customTheme = deepMerge(aruba, {
  global: {
    colors: {
      brand: "#ED6F00",
      control: "#ED6F00",
      focus: "#FFED00",
      "accent-1": "#9fd4c9",
      "accent-2": "#d5d848",
      "dark-1": "#000001",
      "dark-2": "#646569",
      "neutral-1": "#646569",
      "neutral-2": "#004876",
      "neutral-3": "#004876",
      "status-critical": "#dd3000",
      "status-warning": "#f0c954",
      "status-ok": "#008375",
      "status-unknown": "#C3C5C8",
      "status-disabled": "#C3C5C8",
    },
  },
  anchor: {
    color: {
      dark: "brand",
      light: "#000000",
    },
  },
});
