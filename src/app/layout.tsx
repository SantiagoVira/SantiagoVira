import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/smooth-scroll";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-accent`}>
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
