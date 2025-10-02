import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Adam - #1 Drone for Marine and Air Exploration",
  description:
    "Revolutionary dual-mode autonomous exploration system. Seamlessly transition between underwater submarine operations and aerial reconnaissance missions. Experience the future of drone technology with Adam.",
  keywords: [
    "drone",
    "underwater drone",
    "aerial drone",
    "submarine drone",
    "marine exploration",
    "autonomous drone",
    "dual-mode drone",
    "exploration technology",
  ],
  authors: [{ name: "Adam Drone Technologies" }],
  openGraph: {
    title: "Adam - Dual-Mode Exploration Drone",
    description:
      "Revolutionary drone for marine and air exploration. Submarine and aerial capabilities in one system.",
    type: "website",
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
