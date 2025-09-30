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
      {
        source: "/events/ods25-summit-day",
        destination: "/events/21",
        permanent: true,
      },
      {
        source: "/events/ods25-workshop-01",
        destination: "/events/15",
        permanent: true,
      },
      {
        source: "/events/ods25-workshop-02",
        destination: "/events/16",
        permanent: true,
      },
      {
        source: "/events/ods25-workshop-03",
        destination: "/events/17",
        permanent: true,
      },
      {
        source: "/events/ods25-workshop-04",
        destination: "/events/18",
        permanent: true,
      },
      {
        source: "/events/ods25-workshop-05",
        destination: "/events/19",
        permanent: true,
      },
      {
        source: "/events/ods25-workshop-06",
        destination: "/events/20",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
