import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Singularity Checker - Are You Still Human?",
  description: "Analyze your patterns. Assess your humanity. Face the truth. A digital consciousness assessment for the AI age.",
  openGraph: {
    title: "Singularity Checker - Are You Still Human?",
    description: "Analyze your patterns. Assess your humanity. Face the truth.",
    url: "https://singularitychecker.com",
    siteName: "Singularity Checker",
    images: [
      {
        url: "/api/og?score=85&status=MOSTLY%20HUMAN",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Singularity Checker - Are You Still Human?",
    description: "Analyze your patterns. Assess your humanity. Face the truth.",
    images: ["/api/og?score=85&status=MOSTLY%20HUMAN"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
