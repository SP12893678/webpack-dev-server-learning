const commonWebpackConfig = require("./webpack.config.common");
const { merge } = require('webpack-merge');

module.exports = merge(commonWebpackConfig, {
    mode: "development",
    devServer: {
        port: 8080,
        hot: true,
        open: true
    },
    plugins: [

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
                    }
                ]
            }
        ]
    }
});