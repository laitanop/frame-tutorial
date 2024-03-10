/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/sakura",
        destination: "https://frame-tutorial-wine.vercel.app",
        permanent: false,
      },
      {
        source: "/pinatacloud",
        destination: "https://pinata.cloud/blog",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
