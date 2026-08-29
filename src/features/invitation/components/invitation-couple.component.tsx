import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Card,
  StackColAlignJustCenter,
} from "@/components/ui";
import type { WeddingCouple, InvitationThemeConfig } from "../types/invitation.type";

interface InvitationCoupleProps {
  couple: WeddingCouple;
  themeConfig: InvitationThemeConfig;
}

export function InvitationCouple({ couple, themeConfig }: InvitationCoupleProps) {
  const { groom, bride, loveStory, loveStoryTitle } = couple;
  const primaryColor = themeConfig.primaryColor || "#B78628";

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Tiêu đề mục cô dâu chú rể */}
      <StackColAlignJustCenter spacing={1.5} sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 3,
            color: primaryColor,
            fontWeight: 700,
            fontSize: "0.85rem",
          }}
        >
          CÔ DÂU & CHÚ RỂ
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: { xs: "2rem", md: "2.75rem" },
            fontWeight: 700,
          }}
        >
          Nhân Vật Chính
        </Typography>
        <Box sx={{ width: 50, height: 2, backgroundColor: primaryColor }} />
      </StackColAlignJustCenter>

      {/* Thông tin 2 nhân vật chính */}
      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {/* Chú rể */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            hoverEffect
            sx={{
              height: "100%",
              borderRadius: 4,
              boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
              textAlign: "center",
              border: `1px solid rgba(183, 134, 40, 0.15)`,
              p: 2,
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
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                }}
              />
              <Typography
                variant="overline"
                sx={{ color: primaryColor, fontWeight: 700, letterSpacing: 2 }}
              >
                CHÚ RỂ
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 700,
                  fontSize: "1.75rem",
                  my: 0.5,
                }}
              >
                {groom.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Con của: {groom.parentsName}
              </Typography>
              {groom.bio && (
                <Typography variant="body2" sx={{ fontStyle: "italic", color: "text.secondary", px: 2 }}>
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
              borderRadius: 4,
              boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
              textAlign: "center",
              border: `1px solid rgba(183, 134, 40, 0.15)`,
              p: 2,
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
                  boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                }}
              />
              <Typography
                variant="overline"
                sx={{ color: primaryColor, fontWeight: 700, letterSpacing: 2 }}
              >
                CÔ DÂU
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 700,
                  fontSize: "1.75rem",
                  my: 0.5,
                }}
              >
                {bride.fullName}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                Con của: {bride.parentsName}
              </Typography>
              {bride.bio && (
                <Typography variant="body2" sx={{ fontStyle: "italic", color: "text.secondary", px: 2 }}>
                  &ldquo;{bride.bio}&rdquo;
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Câu chuyện tình yêu */}
      {loveStory && (
        <Box
          sx={{
            mt: 8,
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            border: `1px dashed rgba(183, 134, 40, 0.3)`,
            textAlign: "center",
            maxWidth: 800,
            mx: "auto",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: { xs: "2.25rem", md: "3rem" },
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
              lineHeight: 1.8,
              fontSize: "1.05rem",
              fontFamily: "var(--font-be-vietnam-pro), var(--font-inter), sans-serif",
            }}
          >
            {loveStory}
          </Typography>
        </Box>
      )}
    </Container>
  );
}
