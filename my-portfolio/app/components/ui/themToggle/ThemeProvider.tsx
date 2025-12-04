"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"          // html class="dark" 방식
      defaultTheme="system"      // 시스템 테마 기본
      enableSystem
      disableTransitionOnChange  // 토글 시 깜빡이는 전환 최소화
    >
      {children}
    </NextThemesProvider>
  );
}
