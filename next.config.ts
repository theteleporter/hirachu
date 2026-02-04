import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
    unoptimized: true, // Disable optimization for Shopify CDN images
  },
  turbopack: {}, // Silence Turbopack warning
};

export default nextConfig;
