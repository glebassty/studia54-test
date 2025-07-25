import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const metadata: Metadata = {
  title: "Studia 54 test app",
  description: "Studia 54 test app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "600", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <Header />
        <main className="bg-[#181818]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
