/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "akamai",
    domains: ["github.com", "encrypted-tbn0.gstatic.com"],
    path: "",
  },
  assetPrefix: "./",
};

module.exports = nextConfig;
