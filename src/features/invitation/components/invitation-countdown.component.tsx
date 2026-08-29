"use client";

import { useSyncExternalStore } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
  accentColor = "#B78628",
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
    <Box sx={{ py: 3, textAlign: "center" }}>
      <Typography
        variant="overline"
        sx={{
          letterSpacing: 3,
          color: accentColor,
          fontWeight: 700,
          fontSize: "0.85rem",
          display: "block",
          mb: 2,
        }}
      >
        CÙNG ĐẾM NGƯỢC THỜI GIAN
      </Typography>

      <Stack
        direction="row"
        spacing={{ xs: 1.5, sm: 3 }}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        {units.map((unit, index) => (
          <Box
            key={index}
            sx={{
              minWidth: { xs: 65, sm: 85 },
              p: { xs: 1.5, sm: 2 },
              borderRadius: 3,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
              border: `1px solid rgba(183, 134, 40, 0.2)`,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: accentColor,
                fontSize: { xs: "1.75rem", sm: "2.5rem" },
                fontFamily: "var(--font-playfair), serif",
                lineHeight: 1.1,
              }}
            >
              {String(unit.value).padStart(2, "0")}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "text.secondary",
                fontWeight: 600,
                fontSize: { xs: "0.7rem", sm: "0.8rem" },
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              {unit.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
