/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: ['**/api-worker/**']
    };
    return config;
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': ['./api-worker/**/*']
    }
  }
};

export default nextConfig;
