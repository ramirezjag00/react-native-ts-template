const { mergeConfig, getDefaultConfig: getRNDefaultConfig } = require('@react-native/metro-config');
const { getDefaultConfig } = require('expo/metro-config');

const expoConfig = getDefaultConfig(__dirname);
const rnConfig = getRNDefaultConfig(__dirname);

const config = mergeConfig(rnConfig, expoConfig);

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: true,
    inlineRequires: true,
  },
});

module.exports = config;
