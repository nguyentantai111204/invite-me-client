import type { Metadata } from "next";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const metadata: Metadata = {
  title: "Mẫu thiệp mời",
  description: "Khám phá các mẫu thiệp mời độc đáo cho mọi sự kiện.",
};

export default function TemplatesPage() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Mẫu thiệp mời
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Danh sách mẫu thiệp đang được cập nhật...
        </Typography>
      </Box>
    </Container>
  );
}
