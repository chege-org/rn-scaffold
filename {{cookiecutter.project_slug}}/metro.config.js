const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const extraNodeModules = {
  '@modules': path.resolve(__dirname, 'src/modules'),
  '@screens': path.resolve(__dirname, 'src/screens'),
  '@options': path.resolve(__dirname, 'src/options'),
};

const watchFolders = [
  path.resolve(__dirname, 'src/modules'),
  path.resolve(__dirname, 'src/screens'),
  path.resolve(__dirname, 'src/options'),
];

const customConfig = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx', 'json'],
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from extraNodeModules to local node_modules
        name in target
          ? target[name]
          : path.join(process.cwd(), 'node_modules', name),
    }),
  },
  watchFolders,
  resetCache: true,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), customConfig);
