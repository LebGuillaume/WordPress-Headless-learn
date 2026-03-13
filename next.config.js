/** @type {import('next').NextConfig} */
const wpImageUrl = process.env.WP_IMAGE_URL;
const wpImageHost = wpImageUrl ? new URL(wpImageUrl).hostname : null;

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: wpImageHost
      ? [{ protocol: "http", hostname: wpImageHost }]
      : [],
  },
};

module.exports = nextConfig;
