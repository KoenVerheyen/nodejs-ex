const {injectBabelPlugin} = require('react-app-rewired')
const rewireLess= require('react-app-rewire-less')
const CopyWebpackPlugin = require('copy-webpack-plugin')
let path = require('path')

module.exports = function override(config, env) {
    config.output.filename = 'rad/static/js/bundle.js'

    if (env === 'development') {
        config.plugins.push(new CopyWebpackPlugin([{
            from: path.join(__dirname, '/node_modules/nes-core-frontend/public/core'),
            to: path.join(__dirname, '/core')
        }], {debug: 'info'}))
    }

    config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            "@primary-color": "#3399CC",
            "@font-size-base": "12px"
        }
    })(config, env);

    return config;
}
