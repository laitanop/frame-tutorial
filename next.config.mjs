/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["aquamarine-quickest-marmoset-831.mypinata.cloud"],
  },
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
