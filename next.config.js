/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { webpackBuildWorker: true },
  images: { remotePatterns: [{ protocol: "https", hostname: "**", },], },
}

module.exports = nextConfig
