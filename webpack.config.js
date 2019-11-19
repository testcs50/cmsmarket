const path = require('path');

module.exports = {
    entry: {main: './src/index.js'},
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.(sa|sc|c)ss/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}