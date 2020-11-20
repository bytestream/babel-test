const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    target: 'browserslist',
    mode: 'development',
    // https://webpack.js.org/guides/production/#source-mapping
    devtool: 'inline-source-map',
    entry: './src/page.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        // https://webpack.js.org/guides/author-libraries/
        library: 'SpWhmcs',
        libraryTarget: 'umd',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,
                // https://webpack.js.org/loaders/#transpiling
                // https://webpack.js.org/loaders/babel-loader/
                use: {loader: 'babel-loader'}
            },
        ]
    },
    optimization: {
        minimize: false,
        minimizer: [
            // https://webpack.js.org/plugins/terser-webpack-plugin/#remove-comments
            new TerserPlugin({
                terserOptions: {
                    format: {
                        comments: false,
                    },
                },
                extractComments: false,
            }),
        ],
    },
}
