// app/providers.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export async function Providers({ children, session }) {
  return (
    <SessionProvider session={session}>
      <NextUIProvider>
        {/* <NextThemeProvider themes={['light', 'dark']}>{children}</NextThemeProvider> */}
        {children}
      </NextUIProvider>
    </SessionProvider>
  );
}
