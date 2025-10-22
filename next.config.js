const imageDomains = (process.env.IMAGE_DOMAINS || '').split(';').slice().filter(Boolean);
const isProd = process.env.NODE_ENV === 'production';
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    reactCompiler: true,
    compiler: {
        removeConsole: isProd
            ? {
                  exclude: ['error'],
              }
            : false,
    },
    trailingSlash: false,
    images: {
        remotePatterns: imageDomains.map((domain) => ({ protocol: 'https', hostname: domain })),
    },
};

module.exports = nextConfig;
