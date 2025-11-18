import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "TSI Backend Service",
  description: "European Railway Data Conversion API - Internal service for TSI Directory platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        {children}
      </body>
    </html>
  );
}
