const {injectBabelPlugin} = require('react-app-rewired')
const rewireLess= require('react-app-rewire-less')

module.exports = function override(config, env) {
    config.output.filename = 'rad/static/js/bundle.js'

    config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config);
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            "@primary-color": "#3399CC",
            "@font-size-base": "12px"
        }
    })(config, env);

    return config;
}
