/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "i.ytimg.com", "yt3.ggpht.com"]
  }
}

module.exports = nextConfig;
