/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  /* assetPrefix: "https://andreazago.it/next/", */
  images: {
    domains: ["aceternity.com"],
    unoptimized: true,
  },
};

export default nextConfig;
