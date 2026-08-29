"use client";

import { useState } from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import {
  Button,
  StackRowAlignJustCenter,
  StackRowAlignJustBetween,
  StackCol,
} from "@/components/ui";

const NAV_LINKS = [
  { label: "Mẫu thiệp", href: "/templates" },
  { label: "Bảng giá", href: "/pricing" },
  { label: "Về InviteMe", href: "/about" },
  { label: "Thiệp mẫu thực tế", href: "/i/minh-linh" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
        color: "text.primary",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 72, justifyContent: "space-between" }}>
          {/* Logo thương hiệu */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: 2.5,
                background: "linear-gradient(135deg, #B78628 0%, #E58B7B 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                boxShadow: "0 4px 12px rgba(183, 134, 40, 0.35)",
              }}
            >
              <AutoAwesomeIcon fontSize="small" />
            </Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                letterSpacing: -0.5,
                background: "linear-gradient(135deg, #B78628 0%, #E58B7B 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              InviteMe
            </Typography>
          </Link>

          {/* Desktop Navigation Links */}
          <StackRowAlignJustCenter
            spacing={4}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: "none",
                  color: "#4B5563",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  transition: "color 0.2s ease",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    "&:hover": { color: "primary.main" },
                    fontSize: "0.95rem",
                    fontWeight: 600,
                  }}
                >
                  {link.label}
                </Typography>
              </Link>
            ))}
          </StackRowAlignJustCenter>

          {/* Desktop Action CTAs */}
          <StackRowAlignJustCenter
            spacing={1.5}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Link href="/login" style={{ textDecoration: "none" }}>
              <Button variant="ghost" size="medium">
                Đăng nhập
              </Button>
            </Link>

            <Link href="/templates" style={{ textDecoration: "none" }}>
              <Button variant="gradient" size="medium">
                Tạo thiệp ngay
              </Button>
            </Link>
          </StackRowAlignJustCenter>

          {/* Mobile Hamburger Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        slotProps={{
          paper: {
            sx: { width: "80%", maxWidth: 320, p: 3 },
          },
        }}
      >
        <StackRowAlignJustBetween sx={{ mb: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #B78628 0%, #E58B7B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            InviteMe
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </StackRowAlignJustBetween>

        <List>
          {NAV_LINKS.map((link) => (
            <ListItem key={link.href} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                component={Link}
                href={link.href}
                onClick={handleDrawerToggle}
                sx={{ borderRadius: 2 }}
              >
                <ListItemText
                  primary={
                    <Typography sx={{ fontWeight: 600, color: "text.primary" }}>
                      {link.label}
                    </Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <StackCol spacing={1.5} sx={{ mt: 4 }}>
          <Link href="/login" style={{ textDecoration: "none" }} onClick={handleDrawerToggle}>
            <Button variant="outline" fullWidth>
              Đăng nhập
            </Button>
          </Link>
          <Link href="/templates" style={{ textDecoration: "none" }} onClick={handleDrawerToggle}>
            <Button variant="gradient" fullWidth>
              Tạo thiệp miễn phí
            </Button>
          </Link>
        </StackCol>
      </Drawer>
    </AppBar>
  );
}
