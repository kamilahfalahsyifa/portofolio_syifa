import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kamilah Falah Syifa | Mobile & Web Developer",
    template: "%s | Kamilah Falah Syifa",
  },
  description: "I create mobile and web applications with a focus on usability, performance, and elegant design.",
  keywords: ["Mobile Developer", "Web Developer", "Flutter", "React", "TypeScript", "Portfolio"],
  authors: [{ name: "Kamilah Falah Syifa" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kamilah Falah Syifa Portfolio",
    title: "Kamilah Falah Syifa | Mobile & Web Developer",
    description: "I create mobile and web applications with a focus on usability, performance, and elegant design.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamilah Falah Syifa | Mobile & Web Developer",
    description: "I create mobile and web applications with a focus on usability, performance, and elegant design.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
