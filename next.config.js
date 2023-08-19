/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  images: {
    domains: ["roojam.ir","upload.roojam.ir"],
  },
};

module.exports = nextConfig;
