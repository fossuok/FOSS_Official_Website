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
  async redirects() {
    return [
      {
        source: "/membership",
        destination: "/",
        permanent: true,
      },
      {
        source: "/events/agm-2025",
        destination: "/events/23",
        permanent: true,
      },
      {
        source: "/project/ods25",
        destination: "/project/2025",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
