import type { Metadata } from "next";
import { Fira_Mono as FontSans } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/markdown.css";
import {
  EditorContainer,
  EditorContent,
  EditorFooter,
  Logo,
  Menu,
  ThemePicker,
  ThemeProvider,
  TooltipProvider,
} from "@/components";
import { cn } from "@/utils/styles";
import { PreviousPathProvider } from "@/context/PreviusPathContext";

const fontSans = FontSans({
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daniel Núñez - Portfolio",
  description: "Portfolio, blog, and personal website of Daniel Pôrto Núñez",
  openGraph: {
    images: "/og.png",
  },
  icons: [
    {
      url: "/favicon.ico",
    },
  ],
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
        <TooltipProvider>
          <PreviousPathProvider>
            <ThemeProvider attribute="class" defaultTheme="github-dark">
              <EditorContainer>
                <header className="h-12 border-b border-editor-divider flex items-center">
                  <Logo />
                  <Menu />
                  <div className="hidden md:flex ml-auto h-full border-l border-editor-divider items-center  overflow-hidden">
                    <ThemePicker />
                  </div>
                </header>
                <EditorContent>{children}</EditorContent>
                <EditorFooter />
              </EditorContainer>
            </ThemeProvider>
          </PreviousPathProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}
