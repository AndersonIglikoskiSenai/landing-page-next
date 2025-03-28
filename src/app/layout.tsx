import type { Metadata } from "next";
import "./globals.css";

import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "NEXT LANDING PAGE",
  description: "Generated by create next app",
};

export default function RootLayout({ children, }:
   Readonly<{ children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}