import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repo is NOT Ahmed-Afzall.github.io, you might need a basePath:
  // basePath: '/Personal-Portfolio',
};

export default nextConfig;
