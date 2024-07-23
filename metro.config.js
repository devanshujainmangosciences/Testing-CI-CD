// const path = require('path');
// const extraNodeModules = {
//   common: path.resolve(__dirname + '/i18n'),
// };
// const watchFolders = [path.resolve(__dirname + '/i18n')];

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {
//         experimentalImportSupport: false,
//         inlineRequires: false,
//       },
//     }),
//   },
//   resolver: {
//     enableGlobalPackages: true,
//     extraNodeModules: new Proxy(extraNodeModules, {
//       get: (target, name) =>
//         //redirects dependencies referenced from common/ to local node_modules
//         name in target
//           ? target[name]
//           : path.join(process.cwd(), `node_modules/${name}`),
//     }),
//   },
//   watchFolders,
// };

const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const {
  resolver: {sourceExts, assetExts},
} = getDefaultConfig(__dirname);

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
    // babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    enableGlobalPackages: true,
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = mergeConfig(defaultConfig, config);
