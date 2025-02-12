"use client";

import { ThemeProviderWrapper } from "./providers/ThemeProvider";
import { LanguageProvider } from "./providers/LanguageProvider";
import "../app/globals.";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
