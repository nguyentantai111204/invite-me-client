import React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import type { SxProps, Theme } from "@mui/material/styles";
import { StackColAlignJustCenter } from "./stack.component";
import { paddings } from "@/theme/spacing";
import { fontWeights, fontSizes, lineHeights } from "@/theme/typography";

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
        py: `${paddings["2xl"]}px`,
        px: `${paddings.lg}px`,
        textAlign: "center",
        maxWidth: 480,
        mx: "auto",
        ...sx,
      }}
    >
      {/* Hình minh họa Empty State với mixBlendMode multiply hòa trộn nền */}
      <Image
        src={imageSrc}
        alt={title}
        width={imageSize}
        height={imageSize}
        style={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "contain",
          mixBlendMode: "multiply",
        }}
      />

      {/* Tiêu đề Serif sang trọng */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: fontWeights.bold,
          fontFamily: "var(--font-playfair), serif",
          color: "text.primary",
          fontSize: { xs: fontSizes.xl, sm: fontSizes["2xl"] },
        }}
      >
        {title}
      </Typography>

      {/* Mô tả */}
      {description && (
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontSize: fontSizes.sm, lineHeight: lineHeights.relaxed }}
        >
          {description}
        </Typography>
      )}

      {/* Nút hành động bổ sung */}
      {action && <div style={{ marginTop: paddings.md }}>{action}</div>}
    </StackColAlignJustCenter>
  );
}
