import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alankar Sunil Uniyal | Computational Medicine & Biomedical AI",
  description:
    "Research portfolio of Alankar Sunil Uniyal, PhD researcher at Plaksha University. Computational medicine, physiological decomposition, biomedical AI, signal processing, and medical imaging.",
  openGraph: {
    title: "Alankar Sunil Uniyal | Research Portfolio",
    description: "Research in computational medicine, physiological decomposition, and biomedical AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
