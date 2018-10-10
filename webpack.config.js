const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const outputDir = 'dist';

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, outputDir),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)&/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)&/,
                use: ['file-loader']
            }

        ]
    },
    devServer: {
        port: 3000,
        open: true,
        proxy: {
            '/api': 'http://localhost:5000'
        }
    },
    plugins: [
        new CleanWebpackPlugin([outputDir]),
        new HtmlWebpackPlugin({
            template: './public/template.html',
            favicon: './public/favicon.ico'
        })
    ]
};