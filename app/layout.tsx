import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import FloatingHearts from "./components/FloatingHearts";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Be My Valentine?",
  description: "A special gift for a special person",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased text-rose-900 bg-[#fff0f3]`}>
        <FloatingHearts />
        <Toaster richColors position="top-center" closeButton theme="light" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
