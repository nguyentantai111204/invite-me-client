import type { Components, Theme } from "@mui/material/styles";
import { borderRadius } from "./spacing";

export const components: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },

    styleOverrides: {
      root: {
        borderRadius: borderRadius.md, // 12px (chia hết cho 4)
        textTransform: "none",
        fontWeight: 600,
      },
    },
  },

  MuiTextField: {
    defaultProps: {
      variant: "outlined",
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: borderRadius.lg, // 16px (chia hết cho 4)
      },
    },
  },
};