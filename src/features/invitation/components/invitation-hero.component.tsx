import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { StackCenter, StackColAlignJustCenter } from "@/components/ui";
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

  return (
    <StackCenter
      sx={{
        position: "relative",
        minHeight: { xs: "85vh", md: "90vh" },
        textAlign: "center",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)), url('${invitation.coverImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FFFFFF",
        py: 8,
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <StackColAlignJustCenter spacing={3}>
          {/* Lời mở đầu */}
          <Typography
            variant="overline"
            sx={{
              letterSpacing: letterSpacings.mega,
              fontSize: { xs: "0.85rem", md: "1rem" },
              fontWeight: fontWeights.semibold,
              color: themeConfig.secondaryColor || "#E8C872",
              textTransform: "uppercase",
            }}
          >
            SAVE THE DATE • THƯ MỜI THÀNH HÔN
          </Typography>

          {/* Tên dâu rể nghệ thuật */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: "var(--font-great-vibes), cursive",
              fontSize: { xs: "3.25rem", sm: "4.5rem", md: "6rem" },
              fontWeight: 400,
              lineHeight: 1.1,
              color: "#FFFFFF",
              textShadow: "0 4px 16px rgba(0,0,0,0.5)",
            }}
          >
            {groomName} & {brideName}
          </Typography>

          {/* Đường kẻ trang trí */}
          <Box
            sx={{
              width: 80,
              height: 2,
              backgroundColor: themeConfig.secondaryColor || "#E8C872",
              my: 1,
            }}
          />

          {/* Thông tin ngày cưới */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: fontWeights.semibold,
              fontSize: { xs: "1.35rem", md: "1.85rem" },
              letterSpacing: letterSpacings.normal,
              textTransform: "capitalize",
            }}
          >
            {dayOfWeek}, Ngày {day} Tháng {month} Năm {year}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.15rem" },
              fontWeight: 400,
              opacity: 0.9,
            }}
          >
            Vào lúc{" "}
            <Typography component="span" sx={{ fontWeight: fontWeights.bold }}>
              {eventTime}
            </Typography>{" "}
            tại{" "}
            <Typography component="span" sx={{ fontWeight: fontWeights.bold }}>
              {location.venueName}
            </Typography>
          </Typography>
        </StackColAlignJustCenter>
      </Container>
    </StackCenter>
  );
}
