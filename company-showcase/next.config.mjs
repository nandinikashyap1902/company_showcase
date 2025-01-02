/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Disables ESLint checks during builds
    },
    experimental: {
        appDir: true,
      },
};


export default nextConfig;
