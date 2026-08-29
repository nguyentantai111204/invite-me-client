import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Button,
  Card,
  StackColAlignJustCenter,
} from "@/components/ui";
import type { EventLocation, InvitationThemeConfig } from "../types/invitation.type";

interface InvitationLocationProps {
  location: EventLocation;
  themeConfig: InvitationThemeConfig;
}

export function InvitationLocation({ location, themeConfig }: InvitationLocationProps) {
  const primaryColor = themeConfig.primaryColor || "#B78628";

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Tiêu đề mục địa điểm */}
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
          ĐỊA ĐIỂM TỔ CHỨC
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: { xs: "2rem", md: "2.75rem" },
            fontWeight: 700,
          }}
        >
          Nơi Hạnh Phúc Bắt Đầu
        </Typography>
        <Box sx={{ width: 50, height: 2, backgroundColor: primaryColor }} />
      </StackColAlignJustCenter>

      {/* Thông tin chi tiết địa điểm */}
      <Card
        hoverEffect
        sx={{
          borderRadius: 4,
          boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
          border: "1px solid rgba(183, 134, 40, 0.15)",
          textAlign: "center",
          p: { xs: 2, sm: 4 },
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "var(--font-playfair), serif",
              fontWeight: 700,
              fontSize: { xs: "1.5rem", sm: "2rem" },
              color: primaryColor,
              mb: 1,
            }}
          >
            {location.venueName}
          </Typography>

          {location.hallName && (
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: "text.primary" }}>
              {location.hallName}
            </Typography>
          )}

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.05rem", maxWidth: 500, mx: "auto", mb: 3 }}
          >
            {location.address}, {location.city}
          </Typography>

          {location.mapUrl && (
            <Button
              variant="primary"
              href={location.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="large"
              sx={{
                px: 4,
                py: 1.25,
                borderRadius: 3,
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Chỉ đường trên Google Maps
            </Button>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
