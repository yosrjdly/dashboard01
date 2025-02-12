import ThemeProvider from "./providers/ThemeProvider";
import SettingsButton from "./components/SettingsButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
          <SettingsButton /> {/* Floating Settings Button */}
        </ThemeProvider>
      </body>
    </html>
  );
}
