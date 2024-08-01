import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import * as gtag from './gtag';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AutoLabz",
  description: "LLM Based Car Search",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <GoogleAnalytics gaId="G-GKP5HR0WP9" />

        </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
