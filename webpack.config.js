/* eslint-disable  */
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const outPath = "./dist/";

module.exports = {
    context: __dirname,
    entry: "./src/index.ts",
    // and output it into /dist as bundle.js
    output: {
        path: path.join(__dirname, outPath),
        filename: "[name].js",
        chunkFilename: "[name].bundle.js",
        publicPath: outPath,
        library: 'samplelib',
    },
    // adding .ts and .tsx to resolve.extensions will help babel look for .ts and .tsx files to transpile
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            // we use babel-loader to load our jsx and tsx files
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
            // // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],                
               
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
               
            },
        ],
    },
    plugins: [
        new ESLintPlugin({ extensions: ["js","ts"], fix: true}),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: '[name].css',
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: "all",
            maxInitialRequests: Infinity,
            minSize: 0,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                },
            },
        },
    }
};
