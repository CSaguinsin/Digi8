import type { Metadata } from "next";
import { Geist, Archivo_Black, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-archivo-black",
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Digi8",
  description: "Digi8 Studio's Web Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${archivoBlack.variable} 
          ${poppins.variable}
          antialiased
          min-h-screen
          overflow-x-hidden
          w-full
        `}
      >
        <main className="relative w-full">
          {children}
        </main>
      </body>
    </html>
  );
}