const HtmlWebpackPlugin    = require('html-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin     = require("copy-webpack-plugin");

const path = require("path")
const pages = ["encore", "wynn"];

module.exports = {
    
    mode: "development",
    
    output: {
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {
        splitChunks: {
          chunks: "all",
        },
      },

    plugins: [
        // new HtmlWebpackPlugin({
        //     title: 'Mi Webpack App',
        //     // filename: 'index.html',
        //     template: './src/index.html'
        // }),
        
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './src/index.html',
            filename: 'index.html',
            // minify: {
            //   removeComments: true,
            //   collapseWhitespace: true
            // }
          }),
        
          new HtmlWebpackPlugin({
            template: './src/mynn.html',
            filename: 'mynn.html',
            // minify: {
            //   removeComments: true,
            //   collapseWhitespace: true
            // }
          }),

          new HtmlWebpackPlugin({
            template: './src/my.html',
            filename: 'my.html',
            // minify: {
            //   removeComments: true,
            //   collapseWhitespace: true
            // }
          }),
        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/',
            noErrorOnMissing: true }
            ]
        })
    ]
}


