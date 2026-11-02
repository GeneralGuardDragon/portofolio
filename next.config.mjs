/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export -> hasil build di folder "out", cocok untuk Cloudflare Pages
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
