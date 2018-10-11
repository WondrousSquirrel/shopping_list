const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devServer: 'inline-source-map',
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            '/api': 'http://localhost:5000'
        }
    },
});