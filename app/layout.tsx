import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        {children}

        <footer className="flex flex-col items-center justify-center w-full h-24 bg-gray-50 text-gray-500 mt-auto border-t border-gray-100 relative z-10">
          <ul className="list-none flex items-center justify-center gap-2">
            <li className="text-xs text-gray-500">© kugleland 2025</li>
            <li className="text-gray-100"> | </li>
            <li className="text-xs text-gray-500">CVR: DK 36373040</li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
