import type { Components, Theme } from "@mui/material/styles";

export const components: Components<Theme> = {
  MuiButton: {
    defaultProps: {
      disableElevation: true,
    },

    styleOverrides: {
      root: {
        borderRadius: 10,
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
        borderRadius: 16,
      },
    },
  },
};