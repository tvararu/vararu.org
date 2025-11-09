import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/commas/:trailing?",
        destination: "https://tvararu.github.io/commas/",
        permanent: true,
        basePath: false,
      },
      {
        source: "/pug/:trailing?",
        destination: "https://tvararu.github.io/pug/",
        permanent: true,
        basePath: false,
      },
      {
        source: "/the-last-question/:trailing?",
        destination: "https://tvararu.github.io/the-last-question/",
        permanent: true,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
