import type { Metadata } from "next";
import { Inter } from "next/font/google";

import SmoothScroll from "@components/layout/smooth-scroll";
import Header from "@layout/header";

import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santiago Vira",
  description:
    "Dedicated, motivated, reliable. Works well in teams, takes charge when needed.",
  icons: {
    icon: [
      {
        url: "/img/favicon.ico",
        href: "/img/favicon.ico",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/img/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-background text-accent`}>
        <Header />
        <SmoothScroll>
          <main className="flex min-h-screen justify-center px-24">
            <div className="flex min-h-screen flex-col items-center justify-between">
              {children}
            </div>
          </main>
        </SmoothScroll>
      </body>
    </html>
  );
}
