// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      {/* <NextThemeProvider themes={['light', 'dark']}>{children}</NextThemeProvider> */}
      {children}
    </NextUIProvider>
  );
}
