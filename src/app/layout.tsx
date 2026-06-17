import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { CustomCursor } from "@/components/ui/custom-cursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Afzal Ahmed Siddiqui | Data Analyst Portfolio",
  description: "Turning complex data into clear decisions. Portfolio of Afzal Ahmed Siddiqui, Data Analyst specializing in healthcare analytics, ML, and Power BI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <CustomCursor />
            <div className="noise-bg" />
            
            {/* Light Mode Depth Blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -z-1 dark:hidden">
              <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-200/20 blur-[120px] rounded-full" />
              <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-purple-200/20 blur-[100px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[10%] w-[60%] h-[60%] bg-pink-100/20 blur-[140px] rounded-full" />
            </div>

            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
