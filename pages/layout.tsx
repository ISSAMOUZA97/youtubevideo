import { Inter } from "next/font/google";
import "./globals.css";
import { metadata } from "./metadata"; // Import the metadata from the new file

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
