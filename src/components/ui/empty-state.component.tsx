import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { StackColAlignJustCenter } from "./stack.component";

export interface EmptyStateProps {
  title?: string;
  description?: string;
  imageSrc?: string;
  imageSize?: number;
  action?: React.ReactNode;
  sx?: SxProps<Theme>;
}

// Component trạng thái trống (Empty State) hiển thị khi không có dữ liệu
export function EmptyState({
  title = "Không Tìm Thấy Dữ Liệu",
  description = "Hiện tại chưa có nội dung nào được hiển thị tại đây.",
  imageSrc = "/images/empty.png",
  imageSize = 260,
  action,
  sx,
}: EmptyStateProps) {
  return (
    <StackColAlignJustCenter
      spacing={2.5}
      sx={{
        py: 6,
        px: 3,
        textAlign: "center",
        maxWidth: 480,
        mx: "auto",
        ...sx,
      }}
    >
      {/* Hình minh họa Empty State */}
      <Image
        src={imageSrc}
        alt={title}
        width={imageSize}
        height={imageSize}
        style={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "contain",
          filter: "drop-shadow(0 8px 20px rgba(183, 134, 40, 0.12))",
        }}
      />

      {/* Tiêu đề */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          fontFamily: "var(--font-playfair), serif",
          color: "text.primary",
          fontSize: { xs: "1.35rem", sm: "1.65rem" },
        }}
      >
        {title}
      </Typography>

      {/* Mô tả */}
      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: "0.95rem", lineHeight: 1.6 }}
        >
          {description}
        </Typography>
      )}

      {/* Nút hành động bổ sung */}
      {action && <div style={{ marginTop: 16 }}>{action}</div>}
    </StackColAlignJustCenter>
  );
}
