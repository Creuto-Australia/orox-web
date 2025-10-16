import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const gilroy = localFont({
  src: [
    {
      path: "./fonts/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Gilroy-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title:
    "OROX Global – Expanding Investment Access with Innovation and Expertise",
  description:
    "OROX Global delivers quant-driven investment solutions that bridge traditional and emerging markets. Backed by expert teams and cutting-edge tech, we empower investors worldwide with smarter, risk-aware strategies.",
  openGraph: {
    images: [
      {
        url: "/OG.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gilroy.className}>{children}</body>
    </html>
  );
}
