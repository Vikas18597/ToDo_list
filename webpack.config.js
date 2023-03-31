const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : 'development',
    entry : {
        bundle : path.resolve(__dirname, 'src/index.js'),
    },
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use : ['style-loader', 'css-loader', 'sass-loader']
                ,
            },
        ],
    },
    plugins : [
        new HtmlWebpackPlugin({
            title: 'TODO List',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ]
}