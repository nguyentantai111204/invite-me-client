"use client";

import React, { useEffect, useState, useRef } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import { colors } from "@/theme/colors";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
}

// Hiệu ứng cánh hoa hồng & bụi vàng lãng mạn bay trong không gian
export function InvitationParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isEnabled, setIsEnabled] = useState(true);

  useEffect(() => {
    if (!isEnabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const petalColors = [
      "rgba(244, 63, 94, 0.55)", // Hồng hoa hồng
      "rgba(251, 113, 133, 0.45)", // Hồng phấn
      "rgba(217, 119, 6, 0.45)", // Vàng kim sa
      "rgba(234, 179, 8, 0.4)", // Ánh vàng
    ];

    const particleCount = 28;
    const particles: Particle[] = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 8 + 6,
      speedY: Math.random() * 1.2 + 0.6,
      speedX: Math.random() * 0.8 - 0.4,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 1.5 - 0.75,
      opacity: Math.random() * 0.6 + 0.3,
      color: petalColors[Math.floor(Math.random() * petalColors.length)],
    }));

    const drawPetal = (p: Particle) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      // Vẽ hình dạng cánh hoa mềm mại
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size / 2, p.size, 0, 0, p.size * 1.4);
      ctx.bezierCurveTo(-p.size, 0, -p.size / 2, -p.size / 2, 0, 0);
      ctx.fill();
      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.4;
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
        }
        if (p.x > canvas.width + 20) p.x = -20;
        if (p.x < -20) p.x = canvas.width + 20;

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isEnabled]);

  return (
    <>
      {isEnabled && (
        <canvas
          ref={canvasRef}
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 30,
            width: "100%",
            height: "100%",
          }}
        />
      )}

      {/* Nút bật/tắt hiệu ứng hoa rơi ở góc phải */}
      <Tooltip title={isEnabled ? "Tắt hiệu ứng hoa rơi" : "Bật hiệu ứng hoa rơi"}>
        <IconButton
          onClick={() => setIsEnabled(!isEnabled)}
          sx={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            zIndex: 40,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(6px)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            border: `1px solid ${colors.border.goldLight}`,
            color: isEnabled ? colors.rose.main : colors.text.disabled,
            "&:hover": {
              backgroundColor: "#ffffff",
              transform: "scale(1.08)",
            },
            transition: "all 0.2s ease",
          }}
          size="small"
        >
          <LocalFloristIcon sx={{ fontSize: "1.2rem" }} />
        </IconButton>
      </Tooltip>
    </>
  );
}
