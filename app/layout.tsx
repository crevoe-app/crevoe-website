import type { Metadata } from "next";
import { Karla } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crevoe Website",
  description: "Crevoe is a platform for creating and sharing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={karla.className}>
      <body
        className={`${karla.variable} antialiased`}
      >
        <Header />
        <main className="flex min-h-screen flex-col">
          <div className="pt-24 flex-1">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
