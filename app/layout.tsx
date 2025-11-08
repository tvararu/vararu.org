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
