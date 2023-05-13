const imageDomains = (process.env.IMAGE_DOMAINS || '').split(';').slice().filter(Boolean);

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    /* config options here */
    trailingSlash: false,
    images: {
        domains: [...imageDomains],
    },
};

module.exports = nextConfig;
