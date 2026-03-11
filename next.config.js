/** @type {import('next').NextConfig} */
const wpImageUrl = process.env.WP_IMAGE_URL;
const wpImageHost = wpImageUrl ? new URL(wpImageUrl).hostname : null;

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: wpImageHost ? [wpImageHost] : [],
  },
};

module.exports = nextConfig;
