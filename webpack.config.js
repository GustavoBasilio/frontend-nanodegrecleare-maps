const webpack = require('webpack');
const production = process.env.NODE_ENV ? (process.env.NODE_ENV == "production") : false;
const config = production ? require('./webpack.config.prod.js') : require('./webpack.config.dev.js');
module.exports = config;
