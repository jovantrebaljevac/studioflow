import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudioFlow",
  description: "Pametno upravljanje vašim salonom",
  // OVDE SMO IZBACILI ICONS NAMERNO
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr">
      <head>
        {/* Force učitavanje sa novim imenom i timestamp-om da ubijemo keš */}
        <link rel="icon" href="/logo-tab.svg?v=unique123" type="image/svg+xml" />
        <link rel="shortcut icon" href="/logo-tab.svg?v=unique123" />
        <link rel="apple-touch-icon" href="/logo-tab.svg?v=unique123" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}