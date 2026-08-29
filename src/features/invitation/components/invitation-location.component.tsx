import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DirectionsIcon from "@mui/icons-material/Directions";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Button,
  Card,
  StackColAlignJustCenter,
  StackRowAlignJustCenter,
} from "@/components/ui";
import { colors } from "@/theme/colors";
import { shadows } from "@/theme/shadows";
import { borderRadius, paddings } from "@/theme/spacing";
import { fontWeights, fontSizes, lineHeights, letterSpacings } from "@/theme/typography";
import type { EventLocation, InvitationThemeConfig } from "../types/invitation.type";

interface InvitationLocationProps {
  location: EventLocation;
  themeConfig: InvitationThemeConfig;
}

export function InvitationLocation({ location, themeConfig }: InvitationLocationProps) {
  const primaryColor = themeConfig.primaryColor || colors.gold.main;

  return (
    <Container maxWidth="md" sx={{ py: `${paddings["3xl"]}px` }}>
      {/* Tiêu đề mục địa điểm */}
      <StackColAlignJustCenter spacing={1.5} sx={{ textAlign: "center", mb: 6 }}>
        <StackRowAlignJustCenter spacing={1}>
          <LocationOnIcon sx={{ color: primaryColor, fontSize: 20 }} />
          <Typography
            variant="overline"
            sx={{
              letterSpacing: letterSpacings.mega,
              color: primaryColor,
              fontWeight: fontWeights.bold,
              fontSize: fontSizes.xs,
            }}
          >
            ĐỊA ĐIỂM TỔ CHỨC
          </Typography>
        </StackRowAlignJustCenter>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: { xs: fontSizes["3xl"], md: fontSizes["4xl"] },
            fontWeight: fontWeights.bold,
          }}
        >
          Nơi Hạnh Phúc Bắt Đầu
        </Typography>
        {/* Đường kẻ trang trí màu chủ đạo */}
        <StackRowAlignJustCenter
          sx={{ width: 48, height: 2, backgroundColor: primaryColor, borderRadius: `${borderRadius.xs}px` }}
        />
      </StackColAlignJustCenter>

      {/* Card thông tin địa điểm chi tiết */}
      <Card
        hoverEffect
        sx={{
          borderRadius: `${borderRadius.lg}px`,
          boxShadow: shadows.card,
          border: `1px solid ${colors.border.gold}`,
          overflow: "hidden",
        }}
      >
        {/* Dải màu trang trí phía trên */}
        <StackRowAlignJustCenter
          sx={{
            height: 6,
            background: `linear-gradient(90deg, ${primaryColor}, ${colors.rose.main})`,
          }}
        />

        <CardContent sx={{ p: { xs: `${paddings.xl}px`, sm: `${paddings["2xl"]}px` } }}>
          <StackColAlignJustCenter spacing={2} sx={{ textAlign: "center" }}>
            {/* Icon địa điểm */}
            <StackColAlignJustCenter
              sx={{
                width: 56,
                height: 56,
                borderRadius: `${borderRadius.md}px`,
                backgroundColor: `${primaryColor}18`,
                border: `1px solid ${primaryColor}30`,
              }}
            >
              <PlaceIcon sx={{ color: primaryColor, fontSize: 28 }} />
            </StackColAlignJustCenter>

            {/* Tên địa điểm */}
            <StackColAlignJustCenter spacing={0.5}>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: fontWeights.bold,
                  fontSize: { xs: fontSizes.xl, sm: fontSizes["2xl"] },
                  color: primaryColor,
                }}
              >
                {location.venueName}
              </Typography>

              {location.hallName && (
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: fontWeights.semibold, color: "text.primary" }}
                >
                  {location.hallName}
                </Typography>
              )}
            </StackColAlignJustCenter>

            {/* Địa chỉ */}
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: fontSizes.base,
                lineHeight: lineHeights.relaxed,
                maxWidth: 480,
                mx: "auto",
                px: `${paddings.md}px`,
              }}
            >
              {location.address}, {location.city}
            </Typography>

            {/* Nút chỉ đường */}
            {location.mapUrl && (
              <Button
                variant="gradient"
                href={location.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                size="large"
                leftIcon={<DirectionsIcon />}
                sx={{
                  px: `${paddings.xl}px`,
                  py: `${paddings.md}px`,
                  fontSize: fontSizes.base,
                  mt: `${paddings.sm}px`,
                }}
              >
                Chỉ đường trên Google Maps
              </Button>
            )}
          </StackColAlignJustCenter>
        </CardContent>
      </Card>
    </Container>
  );
}
