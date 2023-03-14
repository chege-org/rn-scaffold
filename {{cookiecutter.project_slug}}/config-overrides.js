const webpack = require('webpack');
const path = require('path');

const appDirectory = path.resolve(__dirname);
module.exports = function override(config, env) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
      // Add support for the __DEV__ global variable
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
  );
  config.module.rules[1].oneOf[3].options.plugins.push('import-glob-meta');
  config.resolve.alias = {
    'react-native': 'react-native-web',
    '@modules': path.resolve(appDirectory, 'src/modules'),
    '@screens': path.resolve(appDirectory, 'src/screens'),
    '@options': path.resolve(appDirectory, 'src/options'),
    '@store': path.resolve(appDirectory, 'src/store'),
  };
  return config;
};
