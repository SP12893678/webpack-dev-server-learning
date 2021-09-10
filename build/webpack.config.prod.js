const commonWebpackConfig = require("./webpack.config.common");
const { merge } = require('webpack-merge');

const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(commonWebpackConfig, {
    mode: "production",
    plugins: [
        new OptimizeCssAssetsPlugin({
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            }
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|jfif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'assets/images/[hash:7].[ext]',
                            limit: 8192,
                            esModule: false
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75,
                            },
                        },
                    }
                ]
            }
        ]
    },
});