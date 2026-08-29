import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Card,
  StackCol,
  StackColAlignJustCenter,
  stackRowAlignJustStartStyle,
} from "@/components/ui";
import { borderRadius } from "@/theme/spacing";
import { fontWeights } from "@/theme/typography";
import type { EventScheduleItem, InvitationThemeConfig } from "../types/invitation.type";

interface InvitationScheduleProps {
  schedule: EventScheduleItem[];
  themeConfig: InvitationThemeConfig;
}

export function InvitationSchedule({ schedule, themeConfig }: InvitationScheduleProps) {
  const primaryColor = themeConfig.primaryColor || "#B78628";

  return (
    <Box sx={{ py: 8, backgroundColor: "rgba(183, 134, 40, 0.04)" }}>
      <Container maxWidth="md">
        {/* Tiêu đề mục lịch trình */}
        <StackColAlignJustCenter spacing={1.5} sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 3,
              color: primaryColor,
              fontWeight: fontWeights.bold,
              fontSize: "0.85rem",
            }}
          >
            LỊCH TRÌNH
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "var(--font-playfair), serif",
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: fontWeights.bold,
            }}
          >
            Chương Trình Tiệc Cưới
          </Typography>
          <Box sx={{ width: 50, height: 2, backgroundColor: primaryColor }} />
        </StackColAlignJustCenter>

        {/* Danh sách các mốc thời gian */}
        <StackCol spacing={3}>
          {schedule.map((item, index) => (
            <Card
              key={item.id || index}
              hoverEffect
              sx={{
                ...stackRowAlignJustStartStyle,
                p: { xs: 2.5, sm: 3.5 },
                borderRadius: `${borderRadius.lg}px`,
                border: "1px solid rgba(183, 134, 40, 0.15)",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                gap: { xs: 1.5, sm: 4 },
              }}
            >
              {/* Huy hiệu thời gian */}
              <Box
                sx={{
                  minWidth: 100,
                  py: 1,
                  px: 2,
                  borderRadius: `${borderRadius.sm}px`,
                  backgroundColor: primaryColor,
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: fontWeights.bold,
                  fontSize: "1.1rem",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                {item.time}
              </Box>

              {/* Nội dung sự kiện */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "var(--font-playfair), serif",
                    fontWeight: fontWeights.bold,
                    fontSize: "1.25rem",
                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>
                {item.description && (
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                )}
              </Box>
            </Card>
          ))}
        </StackCol>
      </Container>
    </Box>
  );
}
