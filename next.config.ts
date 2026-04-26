import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: [],
  httpAgentOptions: {
    keepAlive: true,
  },
  devIndicators: {
    position: "bottom-right",
  },
};

export default nextConfig;