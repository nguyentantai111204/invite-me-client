import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Card,
  StackColAlignJustCenter,
  StackRowAlignJustCenter,
} from "@/components/ui";
import { colors } from "@/theme/colors";
import { shadows } from "@/theme/shadows";
import { borderRadius, paddings } from "@/theme/spacing";
import { fontWeights, fontSizes, lineHeights, letterSpacings } from "@/theme/typography";
import type { WeddingCouple, InvitationThemeConfig } from "../types/invitation.type";

interface InvitationCoupleProps {
  couple: WeddingCouple;
  themeConfig: InvitationThemeConfig;
}

export function InvitationCouple({ couple, themeConfig }: InvitationCoupleProps) {
  const { groom, bride, loveStory, loveStoryTitle } = couple;
  const primaryColor = themeConfig.primaryColor || colors.gold.main;

  return (
    <Container maxWidth="lg" sx={{ py: `${paddings["3xl"]}px` }}>
      {/* Tiêu đề mục cô dâu chú rể */}
      <StackColAlignJustCenter spacing={1.5} sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="overline"
          sx={{
            letterSpacing: letterSpacings.mega,
            color: primaryColor,
            fontWeight: fontWeights.bold,
            fontSize: fontSizes.sm,
          }}
        >
          CÔ DÂU & CHÚ RỂ
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: { xs: fontSizes["3xl"], md: fontSizes["4xl"] },
            fontWeight: fontWeights.bold,
          }}
        >
          Nhân Vật Chính
        </Typography>
        {/* Đường kẻ trang trí màu chủ đạo */}
        <StackRowAlignJustCenter
          sx={{ width: 50, height: 2, backgroundColor: primaryColor }}
        />
      </StackColAlignJustCenter>

      {/* Thông tin 2 nhân vật chính */}
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {/* Chú rể */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            hoverEffect
            sx={{
              height: "100%",
              borderRadius: `${borderRadius.md}px`,
              boxShadow: shadows.md,
              textAlign: "center",
              border: `1px solid ${colors.border.gold}`,
              p: `${paddings.md}px`,
            }}
          >
            <CardContent>
              <Avatar
                src={groom.photoUrl}
                alt={groom.fullName}
                sx={{
                  width: { xs: 140, sm: 170 },
                  height: { xs: 140, sm: 170 },
                  mx: "auto",
                  mb: 3,
                  border: `3px solid ${primaryColor}`,
                  boxShadow: shadows.avatar,
                }}
              />
              <Typography
                variant="overline"
                sx={{ color: primaryColor, fontWeight: fontWeights.bold, letterSpacing: letterSpacings.wider }}
              >
                CHÚ RỂ
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: fontWeights.bold,
                  fontSize: fontSizes["2xl"],
                  my: 0.5,
                }}
              >
                {groom.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Con của: {groom.parentsName}
              </Typography>
              {groom.bio && (
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", color: "text.secondary", px: `${paddings.md}px` }}
                >
                  &ldquo;{groom.bio}&rdquo;
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        {/* Cô dâu */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            hoverEffect
            sx={{
              height: "100%",
              borderRadius: `${borderRadius.xl}px`,
              boxShadow: shadows.md,
              textAlign: "center",
              border: `1px solid ${colors.border.gold}`,
              p: `${paddings.md}px`,
            }}
          >
            <CardContent>
              <Avatar
                src={bride.photoUrl}
                alt={bride.fullName}
                sx={{
                  width: { xs: 140, sm: 170 },
                  height: { xs: 140, sm: 170 },
                  mx: "auto",
                  mb: 3,
                  border: `3px solid ${primaryColor}`,
                  boxShadow: shadows.avatar,
                }}
              />
              <Typography
                variant="overline"
                sx={{ color: primaryColor, fontWeight: fontWeights.bold, letterSpacing: letterSpacings.wider }}
              >
                CÔ DÂU
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: fontWeights.bold,
                  fontSize: fontSizes["2xl"],
                  my: 0.5,
                }}
              >
                {bride.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Con của: {bride.parentsName}
              </Typography>
              {bride.bio && (
                <Typography
                  variant="body2"
                  sx={{ fontStyle: "italic", color: "text.secondary", px: `${paddings.md}px` }}
                >
                  &ldquo;{bride.bio}&rdquo;
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Câu chuyện tình yêu */}
      {loveStory && (
        <StackColAlignJustCenter
          sx={{
            mt: 8,
            p: { xs: `${paddings.lg}px`, md: `${paddings["2xl"]}px` },
            borderRadius: `${borderRadius.xl}px`,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: `1px dashed ${colors.border.goldDashed}`,
            textAlign: "center",
            maxWidth: 800,
            mx: "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: { xs: fontSizes["3xl"], md: fontSizes["4xl"] },
              color: primaryColor,
              mb: 1.5,
            }}
          >
            {loveStoryTitle || "Câu Chuyện Tình Yêu"}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              lineHeight: lineHeights.loose,
              fontSize: fontSizes.base,
              fontFamily: "var(--font-be-vietnam-pro), var(--font-inter), sans-serif",
            }}
          >
            {loveStory}
          </Typography>
        </StackColAlignJustCenter>
      )}
    </Container>
  );
}
