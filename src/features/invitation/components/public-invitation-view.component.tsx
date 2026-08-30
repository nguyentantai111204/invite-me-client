"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { getTemplateFontVariables } from "@/config/fonts.config";
import { Button, StackColAlignJustCenter } from "@/components/ui";
import { colors } from "@/theme/colors";
import { borderRadius, paddings } from "@/theme/spacing";
import { fontWeights } from "@/theme/typography";
import type { InvitationData } from "../types/invitation.type";

import { InvitationHero } from "./invitation-hero.component";
import { InvitationCountdown } from "./invitation-countdown.component";
import { InvitationCouple } from "./invitation-couple.component";
import { InvitationLoveStory } from "./invitation-love-story.component";
import { InvitationGallery } from "./invitation-gallery.component";
import { InvitationSchedule } from "./invitation-schedule.component";
import { InvitationLocation } from "./invitation-location.component";
import { InvitationGiftBox } from "./invitation-gift-box.component";
import { InvitationWishesList } from "./invitation-wishes-list.component";
import { InvitationRsvp } from "./invitation-rsvp.component";
import { InvitationMusic } from "./invitation-music.component";
import { InvitationParticles } from "./invitation-particles.component";
import { InvitationEnvelope } from "./invitation-envelope.component";

interface PublicInvitationViewProps {
  invitation: InvitationData;
}

export function PublicInvitationView({ invitation }: PublicInvitationViewProps) {
  const [hasOpenedEnvelope, setHasOpenedEnvelope] = useState(false);

  // Scoped fonts nạp on-demand theo từng template
  const fontVariables = getTemplateFontVariables(
    invitation.themeConfig.fontIds || ["playfair", "greatVibes", "montserrat", "cinzel", "cormorant"]
  );

  const handleEnvelopeOpen = () => {
    setHasOpenedEnvelope(true);
  };

  return (
    <Box
      className={fontVariables}
      sx={{
        backgroundColor: invitation.themeConfig.backgroundColor || colors.background.default,
        color: colors.text.primary,
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {/* 1. Phong Bì Hoàng Gia Mở Đầu Trải Nghiệm */}
      <InvitationEnvelope invitation={invitation} onOpen={handleEnvelopeOpen} />

      {/* 2. Hiệu ứng cánh hoa hồng & bụi vàng rơi lơ lửng */}
      <InvitationParticles />

      {/* 3. Hero Section Hoàng Gia */}
      <InvitationHero invitation={invitation} />

      {/* 4. Countdown Timer & Lưu Vào Lịch */}
      <Container maxWidth="md" sx={{ mt: -4, position: "relative", zIndex: 10 }}>
        <InvitationCountdown
          targetDate={invitation.eventDate}
          accentColor={invitation.themeConfig.primaryColor}
        />
      </Container>

      {/* 5. Cô dâu & Chú rể */}
      {invitation.couple && (
        <InvitationCouple
          couple={invitation.couple}
          themeConfig={invitation.themeConfig}
        />
      )}

      {/* 6. Chuyện Tình Yêu & Timeline Kỷ Niệm */}
      <InvitationLoveStory
        couple={invitation.couple}
        themeConfig={invitation.themeConfig}
      />

      {/* 7. Album Ảnh Cưới Polaroid & Lightbox */}
      <InvitationGallery
        gallery={invitation.gallery}
        themeConfig={invitation.themeConfig}
      />

      {/* 8. Lịch trình sự kiện ngày cưới */}
      {invitation.schedule && invitation.schedule.length > 0 && (
        <InvitationSchedule
          schedule={invitation.schedule}
          themeConfig={invitation.themeConfig}
        />
      )}

      {/* 9. Địa điểm tổ chức & Bản đồ chỉ đường */}
      <InvitationLocation
        location={invitation.location}
        themeConfig={invitation.themeConfig}
      />

      {/* 10. Hộp Mừng Cưới & Mã VietQR Thông Minh */}
      <InvitationGiftBox
        bankAccounts={invitation.bankAccounts}
        couple={invitation.couple}
        themeConfig={invitation.themeConfig}
      />

      {/* 11. Sổ Lưu Bút & Lời Chúc Phúc Trực Tuyến */}
      <InvitationWishesList themeConfig={invitation.themeConfig} />

      {/* 12. Form Xác Nhận Tham Dự (RSVP) */}
      {invitation.rsvpEnabled && (
        <InvitationRsvp
          invitationId={invitation.id}
          themeConfig={invitation.themeConfig}
        />
      )}

      {/* 13. Trình Phát Nhạc Nền Tự Động / Thủ Công */}
      <InvitationMusic
        musicUrl={invitation.themeConfig.musicUrl}
        autoPlay={invitation.themeConfig.autoPlayMusic}
        forcePlayTrigger={hasOpenedEnvelope}
        accentColor={invitation.themeConfig.primaryColor}
      />

      {/* 14. Footer Brand Promotion */}
      <Box
        component="footer"
        sx={{
          py: `${paddings["3xl"]}px`,
          textAlign: "center",
          backgroundColor: colors.background.darkFooter,
          color: colors.text.mutedWhite,
        }}
      >
        <Container maxWidth="sm">
          <StackColAlignJustCenter spacing={2}>
            <Typography variant="body2">
              Thiệp cưới điện tử cao cấp được tạo bởi{" "}
              <Typography component="span" sx={{ fontWeight: fontWeights.bold, color: colors.gold.light }}>
                InviteMe
              </Typography>
            </Typography>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button
                variant="outline"
                size="small"
                sx={{
                  color: colors.text.inverse,
                  borderColor: colors.border.whiteSubtle,
                  "&:hover": {
                    borderColor: colors.text.inverse,
                    backgroundColor: "rgba(255,255,255,0.08)",
                  },
                  borderRadius: `${borderRadius.full}px`,
                  textTransform: "none",
                  px: 3,
                }}
              >
                ✨ Tạo thiệp cưới online miễn phí
              </Button>
            </Link>
          </StackColAlignJustCenter>
        </Container>
      </Box>
    </Box>
  );
}
