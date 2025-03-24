module.exports = {
  presets: [
    [
      'module:@react-native/babel-preset',
      { useTransformReactJSXExperimental: true },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@common': './src/common',
          '@components': './src/common/components',
          '@constants': './src/common/constants',
          '@features': './src/features',
          '@hooks': './src/common/hooks',
          '@navigation': './src/navigation',
          '@state': './src/state',
          '@themes': './src/common/constants/themes',
          '@types': './src/common/types',
          '@utils': './src/utils',
        },
      },
    ],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
