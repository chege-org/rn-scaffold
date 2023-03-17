const webpack = require('webpack');
const path = require('path');

const appDirectory = path.resolve(__dirname);
module.exports = function override(config, {isServer}) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
      // Add support for the __DEV__ global variable
      __DEV__: process.env.NODE_ENV !== 'production',
    }),
  );
  // allow importing from outside of src folder
  config.resolve.plugins = config.resolve.plugins.filter(
    plugin => plugin.constructor.name !== 'ModuleScopePlugin',
  );
  config.module.rules[1].oneOf[3].options.plugins.push('import-glob-meta');
  config.module.rules.push({
    test: /\.ttf$/,
    loader: 'file-loader',
    include: path.resolve(__dirname, './static/media/[name].[ext]'),
  });
  config.resolve.alias = {
    'react-native': 'react-native-web',
    '@modules': path.resolve(appDirectory, 'src/modules'),
    '@screens': path.resolve(appDirectory, 'src/screens'),
    '@options': path.resolve(appDirectory, 'src/options'),
    '@store': path.resolve(appDirectory, 'src/store'),
  };
  // Update the devServer object to use the new setupMiddlewares option
  if (!isServer) {
    config.devServer = {
      ...config.devServer,
      setupMiddlewares: function (devServer) {
        // Your middleware setup code
      },
    };
  }
  return config;
};
