import { Header } from "@/components/layout/header.component";
import { Footer } from "@/components/layout/footer.component";
import Box from "@mui/material/Box";
import { StackCol, flex1Style } from "@/components/ui";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StackCol sx={{ minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={flex1Style}>
        {children}
      </Box>
      <Footer />
    </StackCol>
  );
}
