import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grid Finance",
  description: "Multi-tenant financial infrastructure for Nigeria's lenders, savers, and thrift collectors.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Navbar />
        <div className="mt-[60px]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
