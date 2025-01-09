import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getHome } from "@/api";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

const home = await getHome({});

export const metadata: Metadata = {
  title: home.seo[0]?.title ?? "",
  description: home.seo[0]?.description ?? "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.className} grid min-h-screen grid-rows-[1fr_auto] overflow-x-hidden antialiased`}
      >
        <div className="mx-auto w-screen p-4 pb-8 lg:p-12 lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <Header />
            <main>{children}</main>
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
