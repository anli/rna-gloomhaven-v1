import React from 'react';
import {Theme} from 'react-native-paper';
import styled from 'styled-components/native';

const Screen = ({
  theme,
  children,
  testID,
}: {
  theme: Theme;
  children: JSX.Element[] | JSX.Element;
  testID: string;
}) => (
  <SafeAreaView testID={testID} backgroundColor={theme.colors.background}>
    {children}
  </SafeAreaView>
);

const SafeAreaView = styled.SafeAreaView`
  background-color: ${props => props.backgroundColor};
  flex: 1;
`;

export default Screen;
