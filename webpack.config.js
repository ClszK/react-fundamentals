var webpack = require('webpack');
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index.js',

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        host: '0.0.0.0',
        port: 4000,
        static: __dirname + '/public/',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                  {
                    loader: 'babel-loader',
                    options :{
                        cacheDirectory: true,
                        plugins: ["react-refresh/babel"],
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    },
                  },
                ],
            },
          ],
    },

    plugins: [
        new ReactRefreshWebpackPlugin()
    ]
};
