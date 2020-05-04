import React from 'react';
import {Button, Headline} from 'react-native-paper';
import styled from 'styled-components/native';
import useHome from './hooks';

const HomeScreenComponent = () => {
  const {data} = useHome();

  return (
    <>
      <Screen>
        <Headline>{data?.class}</Headline>
        <DrawButton testID="HomeScreen.DrawButton" mode="contained">
          Draw
        </DrawButton>
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

const DrawButton = styled(Button)`
  width: 100px;
`;
