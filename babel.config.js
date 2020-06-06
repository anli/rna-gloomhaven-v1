module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
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
          '@user': './src/user',
          '@components': './src/components',
          '@admob': './src/admob',
          '@remote-config': './src/remote-config',
          '@assets': './src/assets',
          '@navigations': './src/navigations',
          '@analytics': './src/analytics',
          '@mocks': './__mocks__',
          '@combat-modifier': './src/combat-modifier',
          '@store': './src/store',
          '@utils': './src/utils',
          '@services': './src/services',
          '@test': './test',
          '@screens': './src/screens',
        },
      },
    ],
  ],
};
