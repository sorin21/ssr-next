const withCSS = require('@zeit/next-css');
const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');

let BASE_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : process.env.PROD_URL;

const cssConfig = { cssModule: true };
const nextConfig = {
  publicRuntimeConfig: {
    base_url: BASE_URL
  },
  webpack(config) {
    // you can put more plugins here
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

    return config
  }
};

// if you need a sec option to add, add a new array
// module.exports = withPlugins([[withCSS, cssConfig], []], nextConfig);
module.exports = withPlugins([[withCSS, cssConfig]], nextConfig);