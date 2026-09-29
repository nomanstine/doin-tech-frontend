import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/tokens.css";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

// Satoshi and Clash Display are free Fontshare fonts (not on Google Fonts).
const FONTSHARE_CSS =
  "https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&f[]=clash-display@700&display=swap";

export const metadata: Metadata = {
  title: { default: "ByteSpace | Get Access to Hundreds of Courses", template: "%s | ByteSpace" },
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTSHARE_CSS} />
      </head>
      <body>{children}</body>
    </html>
  );
}
