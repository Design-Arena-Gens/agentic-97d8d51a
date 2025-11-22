import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Plateforme IA pour long-métrage | Runway Genesis",
  description:
    "Comparatif détaillé et guide stratégique pour créer un long métrage entièrement réalisé grâce à l'intelligence artificielle en 2024."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={lexend.className}>
      <body>{children}</body>
    </html>
  );
}
