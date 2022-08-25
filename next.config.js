/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    loader:"akamai",
    path:''
  },
  basePath: "/kamakshee-weds-chaitanya",
  assetPrefix: "/kamakshee-weds-chaitanya"
}

module.exports = nextConfig
