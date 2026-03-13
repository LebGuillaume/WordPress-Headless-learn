/** @type {import('next').NextConfig} */
const wpImageUrl = process.env.WP_IMAGE_URL;
const wpImageHost = wpImageUrl ? new URL(wpImageUrl).hostname : "hotdang.guillaumelebegue.fr";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: wpImageHost },
      { protocol: "http", hostname: wpImageHost },
    ],
  },
};

module.exports = nextConfig;
