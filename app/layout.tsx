import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className='{inter.className} bg-gray-950'>
        <nav className="sticky top-0 left-0 flex py-4 px-16 m-4 space-x-4 items-center text-white">
          <Link className="ring-2 ring-gray-600 shadow-md hover:ring-gray-300 duration-300 transition  p-1 rounded-md" href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        <ul className="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        {children}
      </body>
    </html>
  );
}
