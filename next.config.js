/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    trailingSlash: false,
    reactStrictMode: true,
    images: {
        domains: ['storage.bbon.me'],
    },
};

module.exports = nextConfig;
