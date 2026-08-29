import React from "react";
import TextField, { type TextFieldProps } from "@mui/material/TextField";
import { borderRadius } from "@/theme/spacing";

export interface InputProps extends Omit<TextFieldProps, "variant"> {
  variant?: "outlined" | "filled" | "standard";
}

// Ô nhập liệu tùy chỉnh với bo góc chuẩn và viền màu thương hiệu
export const Input = React.forwardRef<HTMLDivElement, InputProps>(
  ({ variant = "outlined", sx, ...props }, ref) => {
    return (
      <TextField
        ref={ref}
        variant={variant}
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: `${borderRadius.md}px`, // 12px (chia hết cho 4)
            transition: "all 0.2s ease",
            "&:hover fieldset": {
              borderColor: "primary.main",
            },
            "&.Mui-focused fieldset": {
              borderColor: "primary.main",
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
