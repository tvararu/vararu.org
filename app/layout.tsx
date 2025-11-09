import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "vararu.org",
  description: "Theo Vararu's website",
  openGraph: {
    title: "vararu.org",
    type: "website",
    url: "https://vararu.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="m-4 bg-white text-black sm:mx-auto sm:my-12 sm:max-w-120
          dark:bg-black dark:text-white"
      >
        <Header />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
