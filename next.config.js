/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
  },
  webpack: (config) => {
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
}

module.exports = nextConfig
