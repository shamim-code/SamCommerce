/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
      domains: ['i.ibb.co'], // Use only the hostname
    },
    eslint:{
      ignoreDuringBuilds: true,
    }
};

export default nextConfig;
