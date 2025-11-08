import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/header";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  minimumScale: 1,
};

export const metadata: Metadata = {
  title: "Theo Vararu's website",
  description: "Theodor Vararu's website.",
  applicationName: "vararu.org",
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
      <body className="m-4 sm:mx-auto sm:my-12 sm:max-w-120">
        <Header />
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
