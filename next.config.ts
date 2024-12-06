import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    //appDir: true,
    typedRoutes: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
