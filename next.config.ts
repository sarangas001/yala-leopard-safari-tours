import type { NextConfig } from "next";

const ONE_YEAR = "public, max-age=31536000, immutable";

const nextConfig: NextConfig = {
  images: {
    qualities: [55, 70, 72, 75, 80, 85, 90, 95],
    // Optimised images are keyed by URL; keep them cached for a year.
    minimumCacheTTL: 31536000,
  },
  async headers() {
    // Static files in /public otherwise get no long-lived cache lifetime.
    return [
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: ONE_YEAR }] },
      { source: "/videos/:path*", headers: [{ key: "Cache-Control", value: ONE_YEAR }] },
      { source: "/:file(.*\.(?:svg|png|jpg|jpeg|webp|avif|ico|woff2))", headers: [{ key: "Cache-Control", value: ONE_YEAR }] },
    ];
  },
};

export default nextConfig;
