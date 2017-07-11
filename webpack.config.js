var path = require('path');

module.exports = {
    entry: './src/index.ts',
    target: 'node',
    module: {
        loaders: [
            { test: /\.ts(x?)$/, loader: 'ts-loader' }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: 'index.js'
    },
};