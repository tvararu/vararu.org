import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/header";
import "./globals.css";

const SITE_TITLE = "Theo Vararu";
const SITE_DESCRIPTION =
  "Software engineer specialising in full-stack web applications, accessibility, and progressive enhancement.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  metadataBase: new URL("https://vararu.org"),
  authors: [{ name: SITE_TITLE }],
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: "https://vararu.org",
    siteName: "vararu.org",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Theo Vararu's website",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
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
        className="m-4 bg-white font-serif text-xl text-black sm:mx-auto
          sm:my-12 sm:max-w-2xl dark:bg-black dark:text-white"
      >
        <Header />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
