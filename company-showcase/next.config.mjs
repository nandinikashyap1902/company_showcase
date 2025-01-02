/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // Disables ESLint checks during builds
    },
    env: {
        DATABASE_URL:process.env.DATABASE_URL
    }
};


export default nextConfig;
