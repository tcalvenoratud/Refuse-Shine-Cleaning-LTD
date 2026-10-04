import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [75, 95],
  },
  async redirects() {
    return [
      {
        source: "/location",
        destination: "/locations",
        permanent: true,
      },
      {
        source: "/location/:slug",
        destination: "/locations/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
