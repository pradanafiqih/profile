import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Hanya muat aset lokal. Tidak ada domain eksternal (R5.6).
    remotePatterns: [],
  },
  experimental: {
    typedRoutes: false,
  },
};

export default nextConfig;
