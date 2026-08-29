"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
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
import {
  Button,
  StackCenter,
  StackRowAlignJustCenter,
  StackRowAlignJustBetween,
  StackCol,
} from "@/components/ui";
import { colors } from "@/theme/colors";
import { shadows } from "@/theme/shadows";
import { borderRadius, paddings } from "@/theme/spacing";
import { fontWeights, fontSizes } from "@/theme/typography";
import { siteConfig } from "@/config/site.config";

const NAV_LINKS = [
  { label: "Mẫu thiệp", href: "/templates" },
  { label: "Bảng giá", href: "/pricing" },
  { label: "Về Duyên", href: "/about" },
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
        backgroundColor: "rgba(250, 248, 245, 0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: `1px solid ${colors.border.goldLight}`,
        color: "text.primary",
        top: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 76, justifyContent: "space-between" }}>
          {/* Logo thương hiệu */}
          <Link href="/" style={{ textDecoration: "none" }}>
            <StackRowAlignJustCenter spacing={1.5}>
              {/* Logo image với mixBlendMode multiply để hoà nền */}
              <StackCenter sx={{ width: 52, height: 52, flexShrink: 0 }}>
                <Image
                  src="/images/logo.png"
                  alt={siteConfig.name}
                  width={52}
                  height={52}
                  priority
                  style={{
                    width: 52,
                    height: 52,
                    objectFit: "contain",
                    mixBlendMode: "multiply",
                  }}
                />
              </StackCenter>
              <StackCol spacing={0}>
                <Typography
                  sx={{
                    fontFamily: "var(--font-playfair), serif",
                    fontWeight: fontWeights.black,
                    fontSize: fontSizes["2xl"],
                    background: colors.brand.luxuryGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    lineHeight: 1.1,
                    letterSpacing: "-0.5px",
                  }}
                >
                  {siteConfig.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.65rem",
                    fontWeight: fontWeights.semibold,
                    color: colors.text.secondary,
                    letterSpacing: "0.08em",
                    lineHeight: 1,
                    textTransform: "uppercase",
                  }}
                >
                  Thiệp cưới online
                </Typography>
              </StackCol>
            </StackRowAlignJustCenter>
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
                  color: colors.text.secondary,
                  fontSize: fontSizes.sm,
                  fontWeight: fontWeights.semibold,
                  transition: "color 0.2s ease",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    "&:hover": { color: colors.gold.main },
                    fontSize: fontSizes.sm,
                    fontWeight: fontWeights.semibold,
                    transition: "color 0.2s ease",
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
            sx: { width: "80%", maxWidth: 320, p: `${paddings.lg}px` },
          },
        }}
      >
        <StackRowAlignJustBetween sx={{ mb: 3 }}>
          <StackRowAlignJustCenter spacing={1.5}>
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={32}
              height={32}
              style={{ objectFit: "contain", mixBlendMode: "multiply" }}
            />
            <Typography
              sx={{
                fontFamily: "var(--font-playfair), serif",
                fontWeight: fontWeights.black,
                fontSize: fontSizes.xl,
                background: colors.brand.luxuryGradient,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {siteConfig.name}
            </Typography>
          </StackRowAlignJustCenter>
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
                sx={{ borderRadius: `${borderRadius.sm}px` }}
              >
                <ListItemText
                  primary={
                    <Typography sx={{ fontWeight: fontWeights.semibold, color: "text.primary" }}>
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
