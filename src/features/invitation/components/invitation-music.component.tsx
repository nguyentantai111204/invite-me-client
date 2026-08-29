"use client";

import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

interface InvitationMusicProps {
  musicUrl?: string;
  autoPlay?: boolean;
  accentColor?: string;
}

export function InvitationMusic({
  musicUrl,
  autoPlay = false,
  accentColor = "#B78628",
}: InvitationMusicProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!musicUrl) return;

    const audio = new Audio(musicUrl);
    audio.loop = true;
    audioRef.current = audio;

    if (autoPlay) {
      audio.play().then(() => setIsPlaying(true)).catch(() => {
        // Autoplay policy prevented playback
        setIsPlaying(false);
      });
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, [musicUrl, autoPlay]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  if (!musicUrl) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 20, sm: 28 },
        right: { xs: 20, sm: 28 },
        zIndex: 1000,
      }}
    >
      <IconButton
        onClick={togglePlay}
        aria-label={isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền"}
        sx={{
          backgroundColor: accentColor,
          color: "#FFFFFF",
          width: 52,
          height: 52,
          boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
          "&:hover": {
            backgroundColor: "#966A1E",
            transform: "scale(1.05)",
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
    </Box>
  );
}
