import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [];
  },
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: [
      "ui-avatars.com",
      "avatar.iran.liara.run",
      "some-url.com",
      "https://566f-102-210-168-37.ngrok-free.app",
      "lh3.googleusercontent.com",
      "meet.google.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
