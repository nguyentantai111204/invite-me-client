"use client";

import React from "react";
import Dialog, { type DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export interface ModalProps extends Omit<DialogProps, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  onClose?: () => void;
}

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
            borderRadius: 3.5,
            p: { xs: 1, sm: 2 },
            boxShadow: "0 20px 48px rgba(0, 0, 0, 0.15)",
          },
        },
      }}
      {...props}
    >
      {/* Modal Header */}
      {(title || onClose) && (
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 1,
          }}
        >
          <Box>
            {typeof title === "string" ? (
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                {title}
              </Typography>
            ) : (
              title
            )}
            {description && (
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                {description}
              </Typography>
            )}
          </Box>

          {onClose && (
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                color: "text.secondary",
                "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.05)" },
              }}
            >
              <CloseIcon />
            </IconButton>
          )}
        </DialogTitle>
      )}

      {/* Modal Body Content */}
      <DialogContent sx={{ py: 2 }}>{children}</DialogContent>

      {/* Modal Footer Actions */}
      {actions && <DialogActions sx={{ px: 3, pb: 2 }}>{actions}</DialogActions>}
    </Dialog>
  );
}
