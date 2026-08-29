import type { Metadata } from "next";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export const metadata: Metadata = {
  title: "404 - Không tìm thấy trang",
  description: "Trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển dời.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <Container maxWidth="md">
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
        <Stack spacing={3} sx={{ alignItems: "center", maxWidth: 540 }}>
          {/* Badge 404 */}
          <Typography
            variant="h1"
            component="p"
            sx={{
              fontSize: { xs: "5rem", md: "7.5rem" },
              fontWeight: 900,
              lineHeight: 1,
              background: "linear-gradient(135deg, #8B5CF6 0%, #EC4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            404
          </Typography>

          <Typography
            variant="h4"
            component="h1"
            sx={{ fontWeight: 700, color: "text.primary" }}
          >
            Không tìm thấy trang yêu cầu
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ fontSize: "1.1rem" }}>
            Trang bạn đang tìm kiếm có thể đã bị xóa, thay đổi đường dẫn hoặc tạm thời
            không khả dụng. Hãy kiểm tra lại liên kết hoặc quay về trang chủ.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ px: 3.5, py: 1.25, width: { xs: "100%", sm: "auto" } }}
              >
                Về trang chủ
              </Button>
            </Link>

            <Link href="/templates" style={{ textDecoration: "none" }}>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                sx={{ px: 3.5, py: 1.25, width: { xs: "100%", sm: "auto" } }}
              >
                Khám phá mẫu thiệp
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
