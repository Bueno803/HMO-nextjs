/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['66.61.217.4'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
