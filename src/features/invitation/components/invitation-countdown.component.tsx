"use client";

import { useSyncExternalStore } from "react";
import Typography from "@mui/material/Typography";
import {
  StackRowAlignJustCenter,
  StackColAlignJustCenter,
} from "@/components/ui";
import { colors } from "@/theme/colors";
import { shadows } from "@/theme/shadows";
import { borderRadius, paddings } from "@/theme/spacing";
import { fontWeights, fontSizes, letterSpacings, lineHeights } from "@/theme/typography";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface InvitationCountdownProps {
  targetDate: string;
  accentColor?: string;
}

function subscribeTimer(callback: () => void) {
  const timer = setInterval(callback, 1000);
  return () => clearInterval(timer);
}

function calculateTimeLeft(targetDate: string): TimeLeft {
  const difference = +new Date(targetDate) - +new Date();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function InvitationCountdown({
  targetDate,
  accentColor = colors.gold.main,
}: InvitationCountdownProps) {
  const isHydrated = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const timeLeftString = useSyncExternalStore(
    subscribeTimer,
    () => JSON.stringify(calculateTimeLeft(targetDate)),
    () => JSON.stringify({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  );

  if (!isHydrated) return null;

  const timeLeft: TimeLeft = JSON.parse(timeLeftString);

  const units = [
    { label: "Ngày", value: timeLeft.days },
    { label: "Giờ", value: timeLeft.hours },
    { label: "Phút", value: timeLeft.minutes },
    { label: "Giây", value: timeLeft.seconds },
  ];

  return (
    <StackColAlignJustCenter sx={{ py: `${paddings.lg}px`, textAlign: "center" }}>
      {/* Nhãn đếm ngược */}
      <Typography
        variant="overline"
        sx={{
          letterSpacing: letterSpacings.widest,
          color: accentColor,
          fontWeight: fontWeights.bold,
          fontSize: fontSizes.xs,
          display: "block",
          mb: 2,
        }}
      >
        CÙNG ĐẾM NGƯỢC THỜI GIAN
      </Typography>

      <StackRowAlignJustCenter spacing={{ xs: 1.5, sm: 3 }}>
        {units.map((unit, index) => (
          // Ô hiển thị từng đơn vị thời gian
          <StackColAlignJustCenter
            key={index}
            sx={{
              minWidth: { xs: 65, sm: 85 },
              p: { xs: `${paddings.sm}px`, sm: `${paddings.md}px` },
              borderRadius: `${borderRadius.md}px`,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              boxShadow: shadows.md,
              border: `1px solid ${colors.border.gold}`,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: fontWeights.bold,
                color: accentColor,
                fontSize: { xs: fontSizes["3xl"], sm: fontSizes["5xl"] },
                fontFamily: "var(--font-playfair), serif",
                lineHeight: lineHeights.none,
              }}
            >
              {String(unit.value).padStart(2, "0")}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                fontWeight: fontWeights.semibold,
                fontSize: { xs: fontSizes.xs, sm: fontSizes.sm },
                textTransform: "uppercase",
                letterSpacing: letterSpacings.wide,
              }}
            >
              {unit.label}
            </Typography>
          </StackColAlignJustCenter>
        ))}
      </StackRowAlignJustCenter>
    </StackColAlignJustCenter>
  );
}
