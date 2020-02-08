const { parsed: localEnv } = require('dotenv').config();
const webpack = require('webpack');
const withPlugins = require('next-compose-plugins');

let BASE_URL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000/' : process.env.PROD_URL;

// here we pass the rules
const nextConfig = {
  // this comes from nextjs to share the variables 
  // with the server and the client in the same time
  publicRuntimeConfig: {
    base_url: BASE_URL,
    client_id: process.env.CLIENT_ID
  },
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv))
    return config
  }
}

// module.exports = {
//   webpack(config) {
//     config.plugins.push(new webpack.EnvironmentPlugin(localEnv))

//     return config
//   }
// }

module.exports = withPlugins([], nextConfig)