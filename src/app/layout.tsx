import type { Metadata } from "next";
import { Fira_Mono as FontSans } from "next/font/google";
import "@/styles/globals.css";
import {
  EditorContainer,
  EditorContent,
  EditorFooter,
  Logo,
  Menu,
  ThemePicker,
  ThemeProvider,
} from "@/components";
import { cn } from "@/utils/styles";
import { PreviousPathProvider } from "@/context/PreviusPathContext";

const fontSans = FontSans({
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <PreviousPathProvider>
          <ThemeProvider attribute="class" defaultTheme="github-dark">
            <EditorContainer>
              <header className="h-12 border-b border-editor-divider flex items-center">
                <Logo />
                <Menu />
                <div className="ml-auto h-full border-l border-editor-divider flex items-center  overflow-hidden rounded-tr-lg">
                  <ThemePicker />
                </div>
              </header>
              <EditorContent>{children}</EditorContent>
              <EditorFooter />
            </EditorContainer>
          </ThemeProvider>
        </PreviousPathProvider>
      </body>
    </html>
  );
}
