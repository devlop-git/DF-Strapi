/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "static.diamondsfactory.com",
        pathname: "/**",
      },
    ],
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
