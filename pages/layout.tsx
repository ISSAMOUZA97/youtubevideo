import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "../config/metadata"; // Adjust the import path based on your project structure


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
