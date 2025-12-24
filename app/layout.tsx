import type { Metadata } from "next";
import { Intel_One_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Components/ThemeContext";
import Theme from "@/Components/Theme";

const geistMono = Intel_One_Mono({
  weight: "500",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio.",
  description: "Aleksa-Dimics Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${geistMono.className} antialiased select-none`}>
        <ThemeProvider>
          <Theme />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
