import type { NextConfig } from "next";
import withPWA from "next-pwa";

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

// Wrap with PWA only in production
const config = process.env.NODE_ENV === "production" 
  ? withPWA({
      dest: "public",
      register: true,
      skipWaiting: true,
    })(nextConfig)
  : nextConfig;

export default config;
