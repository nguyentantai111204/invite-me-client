"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { StackCol, StackCenter, StackRow, StackRowCenter } from "@/components/ui/stack.component";
import { Card } from "@/components/ui/card.component";
import { colors } from "@/theme/colors";
import { borderRadius, paddings, gaps } from "@/theme/spacing";
import { fontWeights, fontSizes, letterSpacings, lineHeights } from "@/theme/typography";
import type { InvitationThemeConfig } from "../types/invitation.type";

interface WishItem {
  name: string;
  wishes: string;
  time: string;
}

const DEFAULT_WISHES: WishItem[] = [
  {
    name: "Nguyễn Hoàng Nam",
    wishes: "Chúc hai bạn trăm năm hạnh phúc, đầu bạc răng long và sớm đón thiên thần nhỏ nhé!",
    time: "Vừa xong",
  },
  {
    name: "Lê Thị Mai Anh",
    wishes: "Mừng ngày trọng đại của hai bạn! Chúc tình yêu của hai bạn mãi nồng nàn và bền chặt như ngày đầu.",
    time: "2 giờ trước",
  },
  {
    name: "Trần Đức Thắng",
    wishes: "Chúc mừng tân lang tân nương! Chúc hai bạn có một đám cưới trọn vẹn và một cuộc sống hôn nhân viên mãn.",
    time: "Hôm qua",
  },
];

interface InvitationWishesListProps {
  themeConfig?: InvitationThemeConfig;
}

// Sổ lưu bút & Lời chúc phúc từ khách mời trực tuyến
export function InvitationWishesList({ themeConfig }: InvitationWishesListProps) {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: `${paddings["2xl"]}px`, md: `${paddings["4xl"]}px` },
        backgroundColor: colors.background.default,
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <StackCol gap={`${gaps["2xl"]}px`} sx={{ alignItems: "center" }}>
          {/* Section Header */}
          <StackCenter gap="8px" sx={{ textAlign: "center" }}>
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
                Sổ Lưu Bút
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
              Lời Chúc Yêu Thương
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
              Cảm ơn những lời chúc tốt đẹp nhất từ bạn bè và người thân đã gửi tới chúng mình
            </Typography>
          </StackCenter>

          {/* Grid Lời Chúc */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
              gap: `${gaps.lg}px`,
              width: "100%",
            }}
          >
            {DEFAULT_WISHES.map((item, idx) => (
              <Card
                key={idx}
                hoverEffect
                sx={{
                  p: `${paddings.lg}px`,
                  borderRadius: `${borderRadius.lg}px`,
                  backgroundColor: colors.background.paper,
                  border: `1px solid ${colors.border.goldLight}`,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <StackCol gap={`${gaps.sm}px`}>
                  <FormatQuoteIcon sx={{ color: colors.gold.light, fontSize: "2rem" }} />
                  <Typography
                    variant="body2"
                    sx={{
                      color: colors.text.primary,
                      lineHeight: lineHeights.relaxed,
                      fontSize: fontSizes.sm,
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{item.wishes}&rdquo;
                  </Typography>
                </StackCol>

                <StackRow gap={`${gaps.sm}px`} sx={{ alignItems: "center", mt: 2, pt: 1, borderTop: `1px solid ${colors.divider}` }}>
                  <Avatar
                    sx={{
                      width: 32,
                      height: 32,
                      bgcolor: colors.gold.main,
                      fontSize: fontSizes.xs,
                      fontWeight: fontWeights.bold,
                    }}
                  >
                    {item.name.charAt(0)}
                  </Avatar>
                  <StackCol gap="1px">
                    <Typography sx={{ fontWeight: fontWeights.bold, fontSize: fontSizes.xs, color: colors.text.primary }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ fontSize: "0.7rem", color: colors.text.disabled }}>
                      {item.time}
                    </Typography>
                  </StackCol>
                </StackRow>
              </Card>
            ))}
          </Box>
        </StackCol>
      </Container>
    </Box>
  );
}
