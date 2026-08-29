import { createTheme } from "@mui/material/styles";

import { colors } from "./colors";
import { components } from "./components";
import { typography } from "./typography";

export const theme = createTheme({
  palette: {
    mode: "light",

    primary: colors.primary,
    secondary: colors.secondary,

    background: {
      default: colors.background.light,
      paper: colors.background.light,
    },

    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },

  typography,

  components,
});