const webpack = require('webpack')

let webpackConfig = {
    devtool: '#cheap-module-source-map',
    entry: ['./src/example/App'],
    output: {
        path: 'example',
        filename: 'example.js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                loader: 'babel',
                exclude: /node_modules/,
                include: __dirname,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    
    externals: {
        'react': "React",
        'react-dom': "ReactDOM"
    }
    
}

module.exports = webpackConfig