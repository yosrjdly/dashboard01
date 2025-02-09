import Sidebar from "./components/Sidebar";
import SettingsButton from "./components/SettingsButton";
import { ThemeProvider } from "./providers/ThemeProvider";
import { LanguageProvider } from "./providers/LanguageProvider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <div style={{ display: "flex" }}>
              <Sidebar />
              <main style={{ flexGrow: 1, padding: "20px" }}>{children}</main>
              <SettingsButton />
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
