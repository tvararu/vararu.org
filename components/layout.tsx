"use client";

import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
  wide?: boolean;
}

export default function Layout({ children, wide }: LayoutProps) {
  return (
    <div className={`container ${wide ? "wide" : "slim"}`}>
      <style jsx global>{`
        body {
          color: #111;
          font-family: -apple-system, BlinkMacSystemFont, "avenir next", avenir,
            "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial,
            sans-serif;
          margin: 0;
        }

        @media print {
          body {
            font-family: "helvetica neue", helvetica, ubuntu, roboto, noto,
              "segoe ui", arial, sans-serif;
          }
        }
      `}</style>
      <Header />
      <main>{children}</main>
      <style jsx>{`
        .container {
          margin: 1rem;
        }

        @media (min-width: 30rem) {
          .slim {
            margin: 3rem auto;
            max-width: 30rem;
          }
        }

        @media (min-width: 45rem) {
          .wide {
            margin: 3rem auto;
            max-width: 42rem;
          }
        }
      `}</style>
    </div>
  );
}
