/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'lsqcondoofficial.com',
        port: '',
        pathname: '/torontocondomania/public/images/**',
      },
    ],
  },
};

