import type { Metadata, Viewport } from "next";

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
  icons: {
    icon: [
      { url: "/favicon/favicon-196x196.png", sizes: "196x196", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-128.png", sizes: "128x128", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/favicon/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/favicon/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/favicon/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/favicon/apple-touch-icon-60x60.png", sizes: "60x60" },
      { url: "/favicon/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/favicon/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/favicon/apple-touch-icon-152x152.png", sizes: "152x152" },
    ],
  },
  other: {
    "msapplication-TileColor": "#FFFFFF",
    "msapplication-TileImage": "/favicon/mstile-144x144.png",
    "msapplication-square70x70logo": "/favicon/mstile-70x70.png",
    "msapplication-square150x150logo": "/favicon/mstile-150x150.png",
    "msapplication-wide310x150logo": "/favicon/mstile-310x150.png",
    "msapplication-square310x310logo": "/favicon/mstile-310x310.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
