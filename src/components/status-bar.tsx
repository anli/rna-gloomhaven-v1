import React from 'react';
import {StatusBar as StatusBarNative} from 'react-native';
import {Theme} from 'react-native-paper';

/* istanbul ignore next */
const StatusBar = ({theme}: {theme: Theme}) => (
  <StatusBarNative
    backgroundColor={theme.colors.background}
    barStyle={theme.dark ? 'light-content' : 'dark-content'}
  />
);

export default StatusBar;
