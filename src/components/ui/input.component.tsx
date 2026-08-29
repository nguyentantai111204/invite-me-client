import React from "react";
import TextField, { type TextFieldProps } from "@mui/material/TextField";

export interface InputProps extends Omit<TextFieldProps, "variant"> {
  variant?: "outlined" | "filled" | "standard";
}

export const Input = React.forwardRef<HTMLDivElement, InputProps>(
  ({ variant = "outlined", sx, ...props }, ref) => {
    return (
      <TextField
        ref={ref}
        variant={variant}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2.5,
            transition: "all 0.2s ease",
            "&:hover fieldset": {
              borderColor: "#8B5CF6",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#8B5CF6",
              borderWidth: "2px",
            },
          },
          ...sx,
        }}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
