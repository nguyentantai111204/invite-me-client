"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { StackCol, StackCenter, StackRowCenter } from "@/components/ui/stack.component";
import { Card } from "@/components/ui/card.component";
import { colors } from "@/theme/colors";
import { borderRadius, paddings, gaps } from "@/theme/spacing";
import { fontWeights, fontSizes, letterSpacings, lineHeights } from "@/theme/typography";
import type { InvitationThemeConfig, WeddingCouple } from "../types/invitation.type";

interface InvitationLoveStoryProps {
  couple?: WeddingCouple;
  themeConfig?: InvitationThemeConfig;
}

const DEFAULT_MILESTONES = [
  {
    year: "2020",
    date: "14 Tháng 02, 2020",
    title: "Lần Đầu Tiên Gặp Gỡ",
    description: "Một buổi chiều mùa xuân ấm áp tại quán cà phê góc phố, ánh mắt tình cờ chạm nhau và câu chuyện bắt đầu.",
  },
  {
    year: "2021",
    date: "20 Tháng 10, 2021",
    title: "Lời Tỏ Tình Ngọt Ngào",
    description: "Dưới ánh đèn lung linh của thành phố, chúng mình chính thức nắm tay nhau bước vào một hành trình mới.",
  },
  {
    year: "2024",
    date: "24 Tháng 12, 2024",
    title: "Khoảnh Khắc Cầu Hôn",
    description: "Trong chuyến du lịch bên bờ biển lộng gió, chiếc nhẫn được trao cùng lời đồng ý trọn đời.",
  },
  {
    year: "2026",
    date: "Ngày Trọng Đại",
    title: "Về Chung Một Nhà",
    description: "Cùng nhau bước vào lễ đường thiêng liêng, trước sự chứng kiến và chúc phúc của gia đình và bạn bè.",
  },
];

// Dòng thời gian tình yêu lãng mạn với hiệu ứng kết nối
export function InvitationLoveStory({ couple, themeConfig }: InvitationLoveStoryProps) {
  const accentColor = themeConfig?.primaryColor || colors.gold.main;

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
                Chuyện Tình Yêu
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
              {couple?.loveStoryTitle || "Hành Trình Yêu Thương"}
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                maxWidth: "520px",
                fontFamily: "var(--font-cormorant), serif",
                fontSize: fontSizes.base,
              }}
            >
              {couple?.loveStory || "Hạnh phúc không phải là điểm đến, mà là hành trình chúng ta cùng bước bên nhau qua từng năm tháng."}
            </Typography>
          </StackCenter>

          {/* Timeline Wrapper */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                bottom: 0,
                left: { xs: "24px", md: "50%" },
                width: "2px",
                backgroundColor: colors.border.goldLight,
                transform: { xs: "none", md: "translateX(-50%)" },
              },
            }}
          >
            {DEFAULT_MILESTONES.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <Box
                  key={index}
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: isEven ? "row" : "row-reverse" },
                    alignItems: { xs: "flex-start", md: "center" },
                    mb: { xs: 4, md: 6 },
                    pl: { xs: "56px", md: 0 },
                  }}
                >
                  {/* Trục mốc trái tim ở giữa */}
                  <StackCenter
                    sx={{
                      position: "absolute",
                      left: { xs: "24px", md: "50%" },
                      top: { xs: "8px", md: "50%" },
                      transform: "translate(-50%, -50%)",
                      width: "36px",
                      height: "36px",
                      borderRadius: "50%",
                      backgroundColor: colors.background.paper,
                      border: `2px solid ${accentColor}`,
                      boxShadow: "0 0 12px rgba(183, 134, 40, 0.3)",
                      zIndex: 2,
                    }}
                  >
                    <FavoriteIcon sx={{ color: colors.rose.main, fontSize: "1.1rem" }} />
                  </StackCenter>

                  {/* Card nội dung mốc thời gian */}
                  <Box
                    sx={{
                      width: { xs: "100%", md: "calc(50% - 36px)" },
                      textAlign: { xs: "left", md: isEven ? "right" : "left" },
                      pr: { md: isEven ? 4 : 0 },
                      pl: { md: isEven ? 0 : 4 },
                    }}
                  >
                    <Card
                      hoverEffect
                      sx={{
                        p: `${paddings.lg}px`,
                        borderRadius: `${borderRadius.lg}px`,
                        backgroundColor: colors.background.paper,
                        border: `1px solid ${colors.border.goldLight}`,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: fontSizes.xs,
                          fontWeight: fontWeights.bold,
                          color: colors.gold.dark,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {item.date}
                      </Typography>

                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "var(--font-playfair), serif",
                          fontWeight: fontWeights.bold,
                          fontSize: fontSizes.lg,
                          color: colors.text.primary,
                          my: 0.5,
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: colors.text.secondary,
                          lineHeight: lineHeights.relaxed,
                          fontSize: fontSizes.sm,
                        }}
                      >
                        {item.description}
                      </Typography>
                    </Card>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </StackCol>
      </Container>
    </Box>
  );
}
