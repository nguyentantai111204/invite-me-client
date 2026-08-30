import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { StackCenter, StackColAlignJustCenter, StackRowCenter } from "@/components/ui";
import { colors } from "@/theme/colors";
import { fontWeights, letterSpacings } from "@/theme/typography";
import type { InvitationData } from "../types/invitation.type";

interface InvitationHeroProps {
  invitation: InvitationData;
}

export function InvitationHero({ invitation }: InvitationHeroProps) {
  const { couple, eventDate, eventTime, themeConfig, location } = invitation;

  const dateObj = new Date(eventDate);
  const dayOfWeek = dateObj.toLocaleDateString("vi-VN", { weekday: "long" });
  const day = dateObj.getDate();
  const month = dateObj.getMonth() + 1;
  const year = dateObj.getFullYear();

  const groomName = couple?.groom.shortName || "Chú Rể";
  const brideName = couple?.bride.shortName || "Cô Dâu";
  const coverUrl =
    invitation.coverImage ||
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop";

  return (
    <StackCenter
      sx={{
        position: "relative",
        minHeight: { xs: "90vh", md: "95vh" },
        textAlign: "center",
        backgroundImage: `linear-gradient(rgba(18, 15, 12, 0.45), rgba(18, 15, 12, 0.65)), url('${coverUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FFFFFF",
        py: 8,
        px: 2,
        overflow: "hidden",
      }}
    >
      {/* Khung Viền Vàng Hoàng Gia (Gold Luxury Border Frame) */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: 16, md: 32 },
          left: { xs: 16, md: 32 },
          right: { xs: 16, md: 32 },
          bottom: { xs: 16, md: 32 },
          border: `1px solid rgba(254, 240, 138, 0.45)`,
          borderRadius: { xs: "16px", md: "24px" },
          pointerEvents: "none",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 6,
            border: `1px dashed rgba(254, 240, 138, 0.3)`,
            borderRadius: { xs: "12px", md: "20px" },
          },
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <StackColAlignJustCenter spacing={2.5}>
          {/* Tag Save The Date */}
          <StackRowCenter gap="6px" sx={{ color: themeConfig?.secondaryColor || "#FEF08A" }}>
            <AutoAwesomeIcon sx={{ fontSize: "0.9rem" }} />
            <Typography
              variant="overline"
              sx={{
                letterSpacing: letterSpacings.mega,
                fontSize: { xs: "0.75rem", md: "0.9rem" },
                fontWeight: fontWeights.bold,
                textTransform: "uppercase",
              }}
            >
              SAVE THE DATE • LỄ THÀNH HÔN
            </Typography>
            <AutoAwesomeIcon sx={{ fontSize: "0.9rem" }} />
          </StackRowCenter>

          {/* Tên dâu rể nghệ thuật hoàng gia */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: { xs: "3.5rem", sm: "5rem", md: "6.5rem" },
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#FFFFFF",
              textShadow: "0 4px 20px rgba(0,0,0,0.6)",
            }}
          >
            {groomName} & {brideName}
          </Typography>

          {/* Dải phân cách hoa văn trái tim */}
          <StackRowCenter gap="12px" sx={{ my: 0.5, color: "#FEF08A" }}>
            <Box sx={{ width: { xs: 40, sm: 60 }, height: "1px", backgroundColor: "#FEF08A" }} />
            <FavoriteIcon sx={{ fontSize: "1.1rem", color: colors.rose.light }} />
            <Box sx={{ width: { xs: 40, sm: 60 }, height: "1px", backgroundColor: "#FEF08A" }} />
          </StackRowCenter>

          {/* Thông tin ngày cưới trang trọng */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: fontWeights.semibold,
              fontSize: { xs: "1.25rem", md: "1.75rem" },
              letterSpacing: letterSpacings.wide,
              textTransform: "capitalize",
              color: "#FEF08A",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            {dayOfWeek}, {day} Tháng {month} Năm {year}
          </Typography>

          {/* Địa điểm tổ chức */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              fontWeight: 400,
              opacity: 0.95,
              maxWidth: "600px",
              fontFamily: "var(--font-cormorant), serif",
            }}
          >
            Vào lúc{" "}
            <Typography component="span" sx={{ fontWeight: fontWeights.bold, color: "#FFFFFF" }}>
              {eventTime}
            </Typography>{" "}
            tại{" "}
            <Typography component="span" sx={{ fontWeight: fontWeights.bold, color: "#FFFFFF" }}>
              {location.venueName}
            </Typography>
            {location.address && ` — ${location.address}`}
          </Typography>
        </StackColAlignJustCenter>
      </Container>
    </StackCenter>
  );
}
