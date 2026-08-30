"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { StackCol, StackCenter, StackRowCenter } from "@/components/ui/stack.component";
import { Button } from "@/components/ui/button.component";
import { colors } from "@/theme/colors";
import { borderRadius, paddings, gaps } from "@/theme/spacing";
import { fontWeights, fontSizes, letterSpacings } from "@/theme/typography";
import { shadows } from "@/theme/shadows";
import type { InvitationData } from "../types/invitation.type";

interface InvitationEnvelopeProps {
  invitation: InvitationData;
  onOpen: () => void;
}

// Component Phong Bì Hoàng Gia với Con Dấu Sáp 3D và Hiệu Ứng Mở Thiệp Ấn Tượng
export function InvitationEnvelope({ invitation, onOpen }: InvitationEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const groomName = invitation.couple?.groom.shortName || "Chú Rể";
  const brideName = invitation.couple?.bride.shortName || "Cô Dâu";
  const initials = `${groomName.charAt(0)} & ${brideName.charAt(0)}`;

  const handleOpenClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsOpen(true);
      onOpen();
    }, 900);
  };

  if (isOpen) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        backgroundColor: "rgba(18, 15, 12, 0.88)",
        backdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: `${paddings.md}px`,
        transition: "opacity 0.8s ease",
        opacity: isAnimating ? 0 : 1,
        pointerEvents: isAnimating ? "none" : "auto",
      }}
    >
      {/* Khung Phong Bì Nghệ Thuật */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "460px",
          background: "linear-gradient(145deg, #FAF6EE 0%, #F5EFEB 100%)",
          borderRadius: `${borderRadius["2xl"]}px`,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(183, 134, 40, 0.3)",
          border: `2px solid ${colors.gold.light}`,
          p: { xs: `${paddings.xl}px`, sm: `${paddings["2xl"]}px` },
          textAlign: "center",
          overflow: "hidden",
          transform: isAnimating ? "scale(1.08) translateY(-20px)" : "scale(1)",
          transition: "transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Họa tiết hoa văn viền góc vàng hoàng gia */}
        <Box
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            right: 12,
            bottom: 12,
            border: `1px dashed ${colors.gold.main}60`,
            borderRadius: `${borderRadius.xl}px`,
            pointerEvents: "none",
          }}
        />

        {/* Nội dung bên trong phong bì */}
        <StackCol gap={`${gaps.lg}px`} sx={{ position: "relative", zIndex: 2, alignItems: "center" }}>
          {/* Header thiệp */}
          <StackCol gap="6px">
            <StackRowCenter gap="6px" sx={{ color: colors.gold.dark }}>
              <AutoAwesomeIcon sx={{ fontSize: "1rem" }} />
              <Typography
                sx={{
                  fontSize: fontSizes.xs,
                  fontWeight: fontWeights.bold,
                  letterSpacing: letterSpacings.wider,
                  textTransform: "uppercase",
                }}
              >
                Trân Trọng Kính Mời
              </Typography>
              <AutoAwesomeIcon sx={{ fontSize: "1rem" }} />
            </StackRowCenter>

            <Typography
              variant="h3"
              sx={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: { xs: "1.8rem", sm: "2.2rem" },
                fontWeight: fontWeights.bold,
                color: colors.text.primary,
                mt: 1,
                lineHeight: 1.2,
              }}
            >
              {groomName} & {brideName}
            </Typography>

            <Typography
              sx={{
                fontSize: fontSizes.sm,
                color: colors.text.secondary,
                fontStyle: "italic",
                fontFamily: "var(--font-cormorant), serif",
              }}
            >
              Cùng gia đình trân trọng kính mời quý khách tới tham dự ngày vui
            </Typography>
          </StackCol>

          {/* Dấu Sáp Niêm Phong Hoàng Gia (Wax Seal) */}
          <Box
            onClick={handleOpenClick}
            sx={{
              position: "relative",
              width: "88px",
              height: "88px",
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              "&:hover": {
                transform: "scale(1.1) rotate(5deg)",
              },
            }}
          >
            {/* Hiệu ứng hào quang xung quanh sáp */}
            <Box
              sx={{
                position: "absolute",
                inset: -6,
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(183, 134, 40, 0.4) 0%, transparent 70%)",
                animation: "pulse 2s infinite ease-in-out",
                "@keyframes pulse": {
                  "0%, 100%": { transform: "scale(1)", opacity: 0.6 },
                  "50%": { transform: "scale(1.2)", opacity: 1 },
                },
              }}
            />

            {/* Khối sáp đỏ rượu viền vàng (Wax Seal Core) */}
            <StackCenter
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                background: "radial-gradient(circle at 35% 35%, #C2410C 0%, #9A3412 50%, #7C2D12 100%)",
                boxShadow: "0 8px 20px rgba(124, 45, 18, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.3)",
                border: "2px solid #EA580C",
                color: "#FEF08A",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-cinzel), serif",
                  fontWeight: fontWeights.extrabold,
                  fontSize: "1.1rem",
                  letterSpacing: "1px",
                  textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                }}
              >
                {initials}
              </Typography>
            </StackCenter>
          </Box>

          {/* Nút bấm Mở Thiệp Mời */}
          <StackCol gap="8px" sx={{ width: "100%", alignItems: "center" }}>
            <Button
              variant="contained"
              onClick={handleOpenClick}
              sx={{
                background: colors.gold.gradient,
                color: colors.text.inverse,
                fontSize: fontSizes.sm,
                fontWeight: fontWeights.bold,
                px: `${paddings.xl}px`,
                py: "12px",
                borderRadius: `${borderRadius.full}px`,
                boxShadow: shadows.goldLg,
                letterSpacing: "0.5px",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: shadows.goldXl,
                  transform: "translateY(-2px)",
                },
              }}
            >
              ✨ Chạm để mở thiệp cưới
            </Button>
            <Typography sx={{ fontSize: fontSizes.xs, color: colors.text.disabled }}>
              Nhạc nền sẽ tự động phát khi bạn mở thiệp
            </Typography>
          </StackCol>
        </StackCol>
      </Box>
    </Box>
  );
}
