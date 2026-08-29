import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          py: 8,
        }}
      >
        <Stack spacing={3} sx={{ alignItems: "center", maxWidth: 600 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.75rem" },
              fontWeight: 800,
              background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            InviteMe
          </Typography>

          <Typography variant="h5" color="text.secondary">
            Thiết kế thiệp mời online cho đám cưới, sinh nhật và các sự kiện đặc biệt.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5, fontSize: "1rem" }}
          >
            Bắt đầu tạo thiệp
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
