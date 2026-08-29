import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { getTemplateFontVariables } from "@/config/fonts.config";
import {
  Button,
  StackColAlignJustCenter,
} from "@/components/ui";
import type { InvitationData } from "../types/invitation.type";
import { InvitationHero } from "./invitation-hero.component";
import { InvitationCountdown } from "./invitation-countdown.component";
import { InvitationCouple } from "./invitation-couple.component";
import { InvitationSchedule } from "./invitation-schedule.component";
import { InvitationLocation } from "./invitation-location.component";
import { InvitationRsvp } from "./invitation-rsvp.component";
import { InvitationMusic } from "./invitation-music.component";

interface PublicInvitationViewProps {
  invitation: InvitationData;
}

export function PublicInvitationView({ invitation }: PublicInvitationViewProps) {
  // Scoped fonts chỉ nạp cho template này
  const fontVariables = getTemplateFontVariables(
    invitation.themeConfig.fontIds || ["playfair", "greatVibes", "montserrat"]
  );

  return (
    <Box
      className={fontVariables}
      sx={{
        backgroundColor: invitation.themeConfig.backgroundColor || "#FAF8F5",
        color: "#2C2C2C",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* 1. Hero Section */}
      <InvitationHero invitation={invitation} />

      {/* 2. Countdown Timer */}
      <Container maxWidth="md" sx={{ mt: -4, position: "relative", zIndex: 10 }}>
        <InvitationCountdown
          targetDate={invitation.eventDate}
          accentColor={invitation.themeConfig.primaryColor}
        />
      </Container>

      {/* 3. Cô dâu & Chú rể */}
      {invitation.couple && (
        <InvitationCouple
          couple={invitation.couple}
          themeConfig={invitation.themeConfig}
        />
      )}

      {/* 4. Lịch trình sự kiện */}
      {invitation.schedule && invitation.schedule.length > 0 && (
        <InvitationSchedule
          schedule={invitation.schedule}
          themeConfig={invitation.themeConfig}
        />
      )}

      {/* 5. Địa điểm & Bản đồ */}
      <InvitationLocation
        location={invitation.location}
        themeConfig={invitation.themeConfig}
      />

      {/* 6. Form xác nhận tham dự (RSVP) */}
      {invitation.rsvpEnabled && (
        <InvitationRsvp
          invitationId={invitation.id}
          themeConfig={invitation.themeConfig}
        />
      )}

      {/* 7. Trình phát nhạc nền */}
      <InvitationMusic
        musicUrl={invitation.themeConfig.musicUrl}
        autoPlay={invitation.themeConfig.autoPlayMusic}
        accentColor={invitation.themeConfig.primaryColor}
      />

      {/* 8. Footer quảng bá thương hiệu */}
      <Box
        sx={{
          py: 6,
          textAlign: "center",
          backgroundColor: "#1F1F1F",
          color: "rgba(255, 255, 255, 0.7)",
        }}
      >
        <Container maxWidth="sm">
          <StackColAlignJustCenter spacing={2}>
            <Typography variant="body2">
              Thiệp mời điện tử được tạo bởi <strong>InviteMe</strong>
            </Typography>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button
                variant="outline"
                size="small"
                sx={{
                  color: "#FFFFFF",
                  borderColor: "rgba(255, 255, 255, 0.3)",
                  "&:hover": { borderColor: "#FFFFFF", backgroundColor: "rgba(255,255,255,0.05)" },
                  borderRadius: 2,
                  textTransform: "none",
                }}
              >
                Tạo thiệp mời tương tự miễn phí
              </Button>
            </Link>
          </StackColAlignJustCenter>
        </Container>
      </Box>
    </Box>
  );
}
