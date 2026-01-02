import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Insurance Solutions",
  description: "Policies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <link
          rel="icon"
          href="../public/logo.png"
          type="image/png"
        />
      <body
        className={  `${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
