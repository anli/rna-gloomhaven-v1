import React from 'react';
import {Headline} from 'react-native-paper';
import styled from 'styled-components/native';
import useHome from './hooks';

const HomeScreenComponent = () => {
  const {data} = useHome();

  return (
    <>
      <Screen>
        <Headline>{data?.class}</Headline>
      </Screen>
    </>
  );
};

const HomeScreenOptions = {headerShown: false, title: ''};

export default class {
  static Component = HomeScreenComponent;
  static Options = HomeScreenOptions;
}

const Screen = styled.SafeAreaView`
  margin: 16px 16px 16px 16px;
`;
