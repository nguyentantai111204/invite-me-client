"use client";

import React from "react";
import Dialog, { type DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {
  StackRowAlignJustBetween,
  StackCol,
} from "@/components/ui/stack.component";
import { colors } from "@/theme/colors";
import { shadows } from "@/theme/shadows";
import { borderRadius, paddings } from "@/theme/spacing";
import { fontWeights } from "@/theme/typography";

export interface ModalProps extends Omit<DialogProps, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  onClose?: () => void;
}

// Hộp thoại Modal / Dialog tùy biến với phong cách hiện đại
export function Modal({
  open,
  onClose,
  title,
  description,
  children,
  actions,
  maxWidth = "sm",
  fullWidth = true,
  ...props
}: ModalProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth={maxWidth}
      fullWidth={fullWidth}
      slotProps={{
        paper: {
          sx: {
            borderRadius: `${borderRadius.xl}px`,
            p: { xs: `${paddings.xs}px`, sm: `${paddings.md}px` },
            boxShadow: shadows.modal,
          },
        },
      }}
      {...props}
    >
      {/* Tiêu đề Modal */}
      {(title || onClose) && (
        <DialogTitle sx={{ pb: 1 }}>
          <StackRowAlignJustBetween>
            <StackCol spacing={0.5}>
              {typeof title === "string" ? (
                <Typography variant="h5" sx={{ fontWeight: fontWeights.bold }}>
                  {title}
                </Typography>
              ) : (
                title
              )}
              {description && (
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              )}
            </StackCol>

            {onClose && (
              <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                  color: colors.text.secondary,
                  "&:hover": { backgroundColor: colors.border.subtle },
                }}
              >
                <CloseIcon />
              </IconButton>
            )}
          </StackRowAlignJustBetween>
        </DialogTitle>
      )}

      {/* Thân nội dung Modal */}
      <DialogContent sx={{ py: `${paddings.md}px` }}>{children}</DialogContent>

      {/* Nhóm nút hành động chân Modal */}
      {actions && (
        <DialogActions sx={{ px: `${paddings.lg}px`, pb: `${paddings.md}px` }}>
          {actions}
        </DialogActions>
      )}
    </Dialog>
  );
}
