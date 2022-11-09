/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const nextEnv = require("next-env");
const withOffline = require("next-offline");
const dotenvLoad = require("dotenv-load");

dotenvLoad();

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};

const withEnv = nextEnv();

// module.exports = withEnv(nextConfig);

module.exports = withPlugins([withEnv], nextConfig);
