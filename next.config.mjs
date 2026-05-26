/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['66.61.217.4'],
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: './',
}

export default nextConfig
