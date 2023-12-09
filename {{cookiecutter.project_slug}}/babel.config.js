module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    'import-glob-meta',
    '@babel/plugin-proposal-export-namespace-from',
    'react-native-reanimated/plugin', // react-native-reanimated/plugin has to be listed last.
  ],
};
