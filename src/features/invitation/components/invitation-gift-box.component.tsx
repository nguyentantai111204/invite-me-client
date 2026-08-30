"use client";

import React, { useState } from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

import { StackCol, StackCenter, StackRowCenter, StackRowBetween } from "@/components/ui/stack.component";
import { Button } from "@/components/ui/button.component";
import { Card } from "@/components/ui/card.component";
import { colors } from "@/theme/colors";
import { borderRadius, paddings, gaps, margins } from "@/theme/spacing";
import { fontWeights, fontSizes, letterSpacings } from "@/theme/typography";
import { shadows } from "@/theme/shadows";
import type { BankAccountInfo, WeddingCouple, InvitationThemeConfig } from "../types/invitation.type";

interface InvitationGiftBoxProps {
  bankAccounts?: BankAccountInfo[];
  couple?: WeddingCouple;
  themeConfig?: InvitationThemeConfig;
}

const DEFAULT_BANK_ACCOUNTS: BankAccountInfo[] = [
  {
    id: "groom-acc",
    ownerName: "NGUYEN MINH TUAN",
    bankName: "MB Bank (Ngân hàng Quân Đội)",
    accountNumber: "999988886666",
    branch: "Hà Nội",
    note: "Mừng cưới Chú rể Minh Tuấn",
  },
  {
    id: "bride-acc",
    ownerName: "TRAN KHANH LINH",
    bankName: "Techcombank",
    accountNumber: "190366889988",
    branch: "TP. Hồ Chí Minh",
    note: "Mừng cưới Cô dâu Khánh Linh",
  },
];

// Hộp mừng cưới & mã VietQR thông minh với sao chép số tài khoản 1 chạm
export function InvitationGiftBox({ bankAccounts, couple, themeConfig }: InvitationGiftBoxProps) {
  const accounts = bankAccounts && bankAccounts.length > 0 ? bankAccounts : DEFAULT_BANK_ACCOUNTS;
  const [tabIndex, setTabIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const currentAccount = accounts[tabIndex] || accounts[0];
  const groomName = couple?.groom.shortName || "Chú Rể";
  const brideName = couple?.bride.shortName || "Cô Dâu";

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      // Fallback
    }
  };

  // URL sinh ảnh VietQR chuẩn
  const qrCodeUrl =
    currentAccount.qrCodeUrl ||
    `https://img.vietqr.io/image/${currentAccount.bankName.includes("MB") ? "MB" : "TCB"}-${currentAccount.accountNumber}-compact2.png?amount=0&addInfo=${encodeURIComponent(
      currentAccount.note || "Chuc mung hanh phuc"
    )}&accountName=${encodeURIComponent(currentAccount.ownerName)}`;

  return (
    <Box
      component="section"
      sx={{
        py: { xs: `${paddings["2xl"]}px`, md: `${paddings["4xl"]}px` },
        backgroundColor: colors.background.paper,
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <StackCol gap={`${gaps["2xl"]}px`} sx={{ alignItems: "center" }}>
          {/* Section Header */}
          <StackCenter gap="8px" sx={{ textAlign: "center" }}>
            <StackRowCenter gap="6px" sx={{ color: colors.gold.dark }}>
              <AutoAwesomeIcon sx={{ fontSize: "1rem" }} />
              <Typography
                sx={{
                  fontSize: fontSizes.xs,
                  fontWeight: fontWeights.bold,
                  letterSpacing: letterSpacings.wider,
                  textTransform: "uppercase",
                }}
              >
                Hộp Mừng Cưới
              </Typography>
              <AutoAwesomeIcon sx={{ fontSize: "1rem" }} />
            </StackRowCenter>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "var(--font-playfair), serif",
                fontSize: { xs: "2rem", md: "2.8rem" },
                fontWeight: fontWeights.bold,
                color: colors.text.primary,
              }}
            >
              Gửi Quà Chúc Phúc
            </Typography>

            <Typography
              variant="body2"
              sx={{
                color: colors.text.secondary,
                maxWidth: "500px",
                fontFamily: "var(--font-cormorant), serif",
                fontSize: fontSizes.base,
              }}
            >
              Sự hiện diện và lời chúc phúc của quý khách là món quà quý giá nhất dành cho chúng mình
            </Typography>
          </StackCenter>

          {/* Account Selection Tabs */}
          {accounts.length > 1 && (
            <Tabs
              value={tabIndex}
              onChange={(_, val) => setTabIndex(val)}
              centered
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: colors.gold.main,
                  height: "3px",
                  borderRadius: "3px",
                },
                "& .MuiTab-root": {
                  fontWeight: fontWeights.bold,
                  fontSize: fontSizes.sm,
                  textTransform: "none",
                  minWidth: "140px",
                  color: colors.text.secondary,
                  "&.Mui-selected": {
                    color: colors.gold.dark,
                  },
                },
              }}
            >
              <Tab label={`Chú Rể (${groomName})`} />
              <Tab label={`Cô Dâu (${brideName})`} />
            </Tabs>
          )}

          {/* Bank & QR Presentation Card */}
          <Card
            sx={{
              width: "100%",
              maxWidth: "520px",
              p: { xs: `${paddings.lg}px`, sm: `${paddings.xl}px` },
              borderRadius: `${borderRadius.xl}px`,
              border: `1px solid ${colors.border.gold}`,
              backgroundColor: colors.background.cream,
              boxShadow: shadows.goldLg,
              textAlign: "center",
            }}
          >
            <StackCol gap={`${gaps.lg}px`} sx={{ alignItems: "center" }}>
              {/* VietQR Image Container */}
              <Box
                sx={{
                  position: "relative",
                  width: "220px",
                  height: "220px",
                  backgroundColor: "#ffffff",
                  p: 2,
                  borderRadius: `${borderRadius.md}px`,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  border: `1px solid ${colors.border.goldLight}`,
                }}
              >
                <Image
                  src={qrCodeUrl}
                  alt={`Mã QR mừng cưới ${currentAccount.ownerName}`}
                  fill
                  style={{ objectFit: "contain", padding: "8px" }}
                />
              </Box>

              {/* Thông tin tài khoản chi tiết */}
              <StackCol gap={`${gaps.xs}px`} sx={{ width: "100%", alignItems: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: fontWeights.bold,
                    fontSize: fontSizes.base,
                    color: colors.text.primary,
                    textTransform: "uppercase",
                  }}
                >
                  {currentAccount.ownerName}
                </Typography>

                <Typography sx={{ fontSize: fontSizes.sm, color: colors.text.secondary }}>
                  {currentAccount.bankName}
                </Typography>

                {/* Khung số tài khoản với nút Copy */}
                <StackRowBetween
                  sx={{
                    width: "100%",
                    maxWidth: "340px",
                    mt: `${margins.xs}px`,
                    p: "8px 16px",
                    backgroundColor: "#ffffff",
                    borderRadius: `${borderRadius.md}px`,
                    border: `1px dashed ${colors.gold.main}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "monospace",
                      fontWeight: fontWeights.bold,
                      fontSize: fontSizes.md,
                      color: colors.gold.dark,
                      letterSpacing: "1px",
                    }}
                  >
                    {currentAccount.accountNumber}
                  </Typography>

                  <Button
                    size="small"
                    variant="text"
                    onClick={() => handleCopy(currentAccount.accountNumber, currentAccount.id)}
                    startIcon={
                      copiedId === currentAccount.id ? (
                        <CheckIcon sx={{ fontSize: "1rem", color: colors.status.success.main }} />
                      ) : (
                        <ContentCopyIcon sx={{ fontSize: "1rem" }} />
                      )
                    }
                    sx={{
                      fontSize: fontSizes.xs,
                      color: copiedId === currentAccount.id ? colors.status.success.main : colors.gold.dark,
                      fontWeight: fontWeights.semibold,
                    }}
                  >
                    {copiedId === currentAccount.id ? "Đã chép" : "Sao chép"}
                  </Button>
                </StackRowBetween>
              </StackCol>

              <Typography sx={{ fontSize: fontSizes.xs, color: colors.text.disabled }}>
                Quét mã QR bằng bất kỳ ứng dụng Ngân hàng nào để gửi quà mừng trực tiếp
              </Typography>
            </StackCol>
          </Card>
        </StackCol>
      </Container>
    </Box>
  );
}
