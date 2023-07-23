const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 9000,
        hot: false,
        open: true,
        devMiddleware: {
            writeToDisk: true,
        },

    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",

            },
            {
                test: /\.(sa|sc|c)ss$/i,
                exclude: /bootstrap\.min\.css$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    "css-loader",
                    "sass-loader"],

            },
            {
                test: /bootstrap\.min\.css$/i,
                use: [
                    {


                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            esModule: false,
                        },
                    },
                    'rtlcss-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './images/[name][ext]'
                }
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name][ext]'
                }
            },

        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'turkey.html',
            template: './src/turkey.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'eygpt.html',
            template: './src/eygpt.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'login.html',
            template: './src/login.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'register.html',
            template: './src/register.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/style.css',

        }),
        new CssMinimizerPlugin(),


    ],

};