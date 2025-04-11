import type { NextConfig } from "next";

const nextConfig: NextConfig = {
async rewrites() {
    return [
      {
        source: "/about",
        destination: "/pages/about",
      },
      {
        source: "/contact",
        destination: "/pages/contact",
      },
      {
        source: "/register",
        destination: "/pages/register",
      }, {
        source: "/users",
        destination: "/pages/users",
      },
    ];
  }
};

export default nextConfig;

