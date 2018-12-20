var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.less$/,
            loaders: ["style-loader", "css-loder", "less-loader"]
        }]
    },
    output: {
        path: parentDir + '/dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }, 
    
}

// const path = require('path');

// module.exports = {
//     context: __dirname,
//     entry: '../index.js',
//     output: {
//         path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//         filename: 'bundle.js'
//     },
//     resolve: {
//         extensions: ['.js', '.jsx', '*']
//     },
//     module: {
//         rules: [{
//             test: /\.jsx?$/,
//             exclude: /(node_modules)/,
//             use: {
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['@babel/env', '@babel/react']
//                 }
//             },
//         }]
//     },
//     devtool: 'source-map'
// };