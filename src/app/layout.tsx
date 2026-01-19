import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "https://moldable.sh";

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "Moldable - Personal software. Built for change.",
    template: "%s | Moldable",
  },
  description:
    "Build apps that work exactly how you think — powered by AI, shaped by conversation. Download Moldable for macOS and Windows.",
  keywords: [
    // Core product
    "moldable",
    "personal software",
    "AI app builder",
    "app generator",
    "AI-powered apps",
    "local-first",
    "desktop app",
    // Use cases
    "custom apps",
    "productivity apps",
    "personal tools",
    "workflow automation",
    "no-code",
    "low-code",
    "vibe coding",
    "vibe code",
    "cowork",
    // Technology
    "AI assistant",
    "conversational AI",
    "code generation",
    "React apps",
    "Tauri",
    // Competitors/alternatives
    "Notion alternative",
    "custom software",
    "build your own app",
    // Platforms
    "macOS app",
    "Windows app",
    "desktop software",
  ],
  authors: [{ name: "Moldable", url: APP_URL }],
  creator: "Moldable",
  publisher: "Moldable",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: APP_URL,
    siteName: "Moldable",
    title: "Moldable - Personal software. Built for change.",
    description:
      "Build apps that work exactly how you think — powered by AI, shaped by conversation.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@moldableai",
    creator: "@moldableai",
    title: "Moldable - Personal software. Built for change.",
    description:
      "Build apps that work exactly how you think — powered by AI, shaped by conversation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: APP_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
