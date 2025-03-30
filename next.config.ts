import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "resources.fossuok.org",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "resources.fossuok.org",
        pathname: "/2024/images/**",
      },
    ],
  },
};

export default nextConfig;
