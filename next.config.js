/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_HOST_URL: process.env.NEXT_PUBLIC_HOST_URL,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['tailwindui.com'],
  },
}

module.exports = nextConfig
