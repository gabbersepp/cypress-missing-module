const wp = require('@cypress/webpack-preprocessor')

module.exports = (on, config) => {
    const options = {
        webpackOptions: require('../webpack.config'),
    };

    on('file:preprocessor', wp(options));
    config.env = process.env;
    config.env._NAMES = Object.keys(config.env);
    return config;
}
