import { createTheme } from "@mui/material/styles";

import { colors } from "./colors";
import { components } from "./components";
import { typography } from "./typography";

export const theme = createTheme({
  palette: {
    mode: "light",

    primary: colors.primary,
    secondary: colors.secondary,

    error: colors.status.error,
    warning: colors.status.warning,
    info: colors.status.info,
    success: colors.status.success,

    divider: colors.divider,

    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },

    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },

  typography,

  components,
});

export * from "./colors";
export * from "./styles";