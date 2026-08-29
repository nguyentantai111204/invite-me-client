import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
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
        {/* Section Header */}
        <Stack spacing={1.5} sx={{ alignItems: "center", textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              letterSpacing: 3,
              color: primaryColor,
              fontWeight: 700,
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
              fontWeight: 700,
            }}
          >
            Chương Trình Tiệc Cưới
          </Typography>
          <Box sx={{ width: 50, height: 2, backgroundColor: primaryColor }} />
        </Stack>

        {/* Schedule Items Timeline */}
        <Stack spacing={3}>
          {schedule.map((item, index) => (
            <Paper
              key={item.id || index}
              elevation={0}
              sx={{
                p: { xs: 2.5, sm: 3.5 },
                borderRadius: 3,
                border: "1px solid rgba(183, 134, 40, 0.15)",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: { xs: "flex-start", sm: "center" },
                gap: { xs: 1.5, sm: 4 },
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
                },
              }}
            >
              {/* Time Badge */}
              <Box
                sx={{
                  minWidth: 100,
                  py: 1,
                  px: 2,
                  borderRadius: 2,
                  backgroundColor: primaryColor,
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  fontFamily: "var(--font-playfair), serif",
                }}
              >
                {item.time}
              </Box>

              {/* Event Content */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "var(--font-playfair), serif",
                    fontWeight: 700,
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
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
