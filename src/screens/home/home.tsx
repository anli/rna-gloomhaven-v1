import React from 'react';
import {Text, View} from 'react-native';

const HomeScreenComponent = () => {
  return (
    <>
      <View>
        <Text>Home</Text>
      </View>
    </>
  );
};

const HomeScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = HomeScreenComponent;
  static Options = HomeScreenOptions;
}
