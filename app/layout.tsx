import type { Metadata } from "next";
import "./globals.css";
import { montserrat } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import Loader from "./loader";
import { TransitionProvider } from "@/components/transition-provider";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "tjktakbuonngu",
  description: "tjktakbuonngu Freelance Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
        >
          <TransitionProvider>
            <Loader />
            {children}
            <Analytics />
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
