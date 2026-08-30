"use client";

import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { StackCol, StackCenter, StackRowBetween, StackRowCenter } from "@/components/ui/stack.component";
import { colors } from "@/theme/colors";
import { borderRadius, paddings, gaps } from "@/theme/spacing";
import { fontWeights, fontSizes, letterSpacings } from "@/theme/typography";
import type { InvitationThemeConfig } from "../types/invitation.type";

interface InvitationGalleryProps {
  gallery?: string[];
  themeConfig?: InvitationThemeConfig;
}

const DEFAULT_GALLERY = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=800&auto=format&fit=crop",
];

// Album ảnh cưới phong cách Polaroid nghệ thuật với Lightbox xem ảnh toàn màn hình
export function InvitationGallery({ gallery, themeConfig }: InvitationGalleryProps) {
  const images = gallery && gallery.length > 0 ? gallery : DEFAULT_GALLERY;
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  return (
    <Box
      component="section"
      sx={{
        py: { xs: `${paddings["2xl"]}px`, md: `${paddings["4xl"]}px` },
        backgroundColor: colors.background.paper,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <StackCol gap={`${gaps["2xl"]}px`} sx={{ alignItems: "center" }}>
          {/* Section Header */}
          <StackCenter gap="8px" sx={{ textAlign: "center" }}>
            <StackRowCenter gap="6px" sx={{ color: themeConfig?.primaryColor || colors.gold.dark }}>
              <AutoAwesomeIcon sx={{ fontSize: "1rem" }} />
              <Typography
                sx={{
                  fontSize: fontSizes.xs,
                  fontWeight: fontWeights.bold,
                  letterSpacing: letterSpacings.wider,
                  textTransform: "uppercase",
                }}
              >
                Album Kỷ Niệm
              </Typography>
              <AutoAwesomeIcon sx={{ fontSize: "1rem" }} />
            </StackRowCenter>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: { xs: "2rem", md: "2.8rem" },
                fontWeight: fontWeights.bold,
                color: colors.text.primary,
              }}
            >
              Khoảnh Khắc Hạnh Phúc
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                maxWidth: "500px",
                fontFamily: "var(--font-cormorant), serif",
                fontSize: fontSizes.base,
              }}
            >
              Từng bức ảnh ghi dấu chặng đường yêu thương và lời hứa trọn đời bên nhau
            </Typography>
          </StackCenter>

          {/* Grid Polaroid Gallery */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(1, 1fr)",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: `${gaps.xl}px`,
              width: "100%",
            }}
          >
            {images.map((imgUrl, index) => {
              // Xoay góc nhẹ nhàng cho từng bức ảnh tạo hiệu ứng Polaroid tự nhiên
              const rotations = [-2, 1.5, -1, 2, -1.5, 1];
              const rotation = rotations[index % rotations.length];

              return (
                <Box
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  sx={{
                    position: "relative",
                    backgroundColor: "#ffffff",
                    p: `${paddings.sm}px`,
                    pb: `${paddings.lg}px`,
                    borderRadius: `${borderRadius.sm}px`,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                    border: `1px solid ${colors.border.goldLight}`,
                    cursor: "pointer",
                    transform: `rotate(${rotation}deg)`,
                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    "&:hover": {
                      transform: "scale(1.04) rotate(0deg) translateY(-8px)",
                      boxShadow: "0 20px 35px -5px rgba(183, 134, 40, 0.25)",
                      zIndex: 10,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      paddingTop: "120%", // Tỉ lệ ảnh dọc nghệ thuật
                      overflow: "hidden",
                      borderRadius: `${borderRadius.xs}px`,
                      backgroundColor: colors.background.subtle,
                    }}
                  >
                    <Image
                      src={imgUrl}
                      alt={`Khoảnh khắc cưới ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      textAlign: "center",
                      mt: 1.5,
                      fontFamily: "var(--font-great-vibes), cursive",
                      fontSize: "1.2rem",
                      color: colors.gold.dark,
                    }}
                  >
                    Sweet Memory #{index + 1}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </StackCol>
      </Container>

      {/* Lightbox Modal phóng to ảnh */}
      <Dialog
        open={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        maxWidth="lg"
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
              overflow: "hidden",
              margin: 0,
              width: "100%",
              height: "100%",
              maxHeight: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          },
        }}
      >
        {selectedIndex !== null && (
          <Box
            sx={{
              position: "relative",
              width: "90vw",
              maxWidth: "900px",
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Nút đóng */}
            <IconButton
              onClick={() => setSelectedIndex(null)}
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                color: "#ffffff",
                backgroundColor: "rgba(0,0,0,0.6)",
                zIndex: 50,
                "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* Nút Prev */}
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                left: 16,
                color: "#ffffff",
                backgroundColor: "rgba(0,0,0,0.6)",
                zIndex: 50,
                "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
              }}
            >
              <ArrowBackIosNewIcon />
            </IconButton>

            {/* Hình ảnh chính */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: `${borderRadius.lg}px`,
                overflow: "hidden",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
              }}
            >
              <Image
                src={images[selectedIndex]}
                alt="Phóng to ảnh cưới"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>

            {/* Nút Next */}
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                right: 16,
                color: "#ffffff",
                backgroundColor: "rgba(0,0,0,0.6)",
                zIndex: 50,
                "&:hover": { backgroundColor: "rgba(0,0,0,0.8)" },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        )}
      </Dialog>
    </Box>
  );
}
