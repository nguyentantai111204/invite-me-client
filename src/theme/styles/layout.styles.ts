import type { CSSProperties } from "react";

// Style layout dùng chung cho TableCell, Box, Stack và các component khác

// --- Hướng ngang (Row) ---

// Hàng ngang cơ bản
export const stackRowStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
};

// Hàng ngang căn giữa 2 trục (Align Center + Justify Center)
export const stackRowAlignJustCenterStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};

// Hàng ngang căn đều 2 bên (Align Center + Justify Space-Between)
export const stackRowAlignJustBetweenStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

// Hàng ngang căn đầu (Align Center + Justify Flex-Start)
export const stackRowAlignJustStartStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
};

// Hàng ngang căn cuối (Align Center + Justify Flex-End)
export const stackRowAlignJustEndStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
};

// Hàng ngang căn trên đều 2 bên (Align Flex-Start + Justify Space-Between)
export const stackRowTopBetweenStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
};

// Hàng ngang tự động xuống dòng khi đầy (Flex Wrap)
export const stackRowWrapStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
};

// --- Hướng dọc (Column) ---

// Cột dọc cơ bản
export const stackColumnStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

// Cột dọc căn giữa 2 trục (Align Center + Justify Center)
export const stackColAlignJustCenterStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

// Cột dọc căn đều 2 bên (Align Center + Justify Space-Between)
export const stackColAlignJustBetweenStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
};

// Cột dọc căn trái (Align Flex-Start + Justify Center)
export const stackColAlignJustStartStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
};

// Cột dọc căn phải (Align Flex-End + Justify Center)
export const stackColAlignJustEndStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "center",
};

// --- Tiện ích căn chỉnh ---

// Căn giữa tuyệt đối
export const centerStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// Căn giữa 100% kích thước
export const fullCenterStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
};

// Chiếm trọn không gian còn lại
export const flex1Style: CSSProperties = {
  flex: 1,
};
