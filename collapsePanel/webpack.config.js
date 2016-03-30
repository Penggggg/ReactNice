var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: [
    	path.resolve(__dirname, 'index.js')
    ],
    output: {
        path: 'dist/', 
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
              test: /\.js|jsx$/,
              loader: 'babel', 
              query: {
                presets: ['es2015', 'react'],
                cacheDirectory: true
              }
            }
        ]
    }
}