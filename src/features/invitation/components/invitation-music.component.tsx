"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Tooltip from "@mui/material/Tooltip";
import { colors } from "@/theme/colors";

const DEFAULT_WEDDING_MUSIC = "https://assets.mixkit.co/music/preview/mixkit-wedding-waltz-238.mp3";

interface InvitationMusicProps {
  musicUrl?: string;
  autoPlay?: boolean;
  accentColor?: string;
  forcePlayTrigger?: boolean;
}

export function InvitationMusic({
  musicUrl,
  autoPlay = false,
  accentColor = colors.gold.main,
  forcePlayTrigger = false,
}: InvitationMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeUrl = musicUrl || DEFAULT_WEDDING_MUSIC;

  useEffect(() => {
    const audio = new Audio(activeUrl);
    audio.loop = true;
    audioRef.current = audio;

    if (autoPlay) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [activeUrl, autoPlay]);

  // Kích hoạt phát nhạc khi mở phong bì
  useEffect(() => {
    if (forcePlayTrigger && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  }, [forcePlayTrigger, isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 20, sm: 24 },
        right: { xs: 20, sm: 24 },
        zIndex: 1000,
      }}
    >
      <Tooltip title={isPlaying ? "Tạm dừng nhạc nền" : "Phát nhạc nền lãng mạn"}>
        <IconButton
          onClick={togglePlay}
          aria-label={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
          sx={{
            backgroundColor: accentColor,
            color: "#FFFFFF",
            width: 48,
            height: 48,
            boxShadow: "0 8px 24px rgba(183, 134, 40, 0.35)",
            "&:hover": {
              backgroundColor: colors.gold.dark,
              transform: "scale(1.08)",
            },
            transition: "transform 0.2s ease, background-color 0.2s ease",
            animation: isPlaying ? "spin 6s linear infinite" : "none",
            "@keyframes spin": {
              "0%": { transform: "rotate(0deg)" },
              "100%": { transform: "rotate(360deg)" },
            },
          }}
        >
          {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
}
