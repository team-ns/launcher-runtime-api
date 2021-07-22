const path = require('path');

const mode = [{
    mode: 'production',
    filename: 'nslauncher-runtime-api.min.js',
},{
    mode: 'development',
    filename: 'nslauncher-runtime-api.js',
}]

module.exports = mode.map(c => {
    return {
        mode: c.mode,
        devtool: 'source-map',
        target: 'web',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: c.filename,
            library: 'nslauncher',
            libraryTarget: 'umd'
        }
    }
})