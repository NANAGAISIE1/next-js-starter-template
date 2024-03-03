"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import ConvexClientProvider from "./convex";
import Modals from "./modals";

export function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="smartnote-theme-1"
      {...props}
    >
      <ConvexClientProvider>{children}</ConvexClientProvider>
      <Modals />
    </NextThemesProvider>
  );
}
