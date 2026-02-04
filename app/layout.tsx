import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";
import type { Metadata,Viewport } from "next";


export const metadata: Metadata = {
  title: "Pycore Technologies | Custom Software Development Company",
  description: "Building scalable digital products for modern businesses",
  viewport: "width=device-width, initial-scale=1",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-200">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
