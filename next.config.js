/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: ["demo.vendure.io"],
  },
};

module.exports = nextConfig;
