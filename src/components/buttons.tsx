import React from 'react';
import {Theme} from 'react-native-paper';
import styled from 'styled-components/native';

const Buttons = ({
  theme,
  children,
}: {
  theme: Theme;
  children: JSX.Element | JSX.Element[];
}) => <View theme={theme}>{children}</View>;

const View = styled.View`
  background-color: ${props => props.theme.colors.background};
  height: 72px;
  padding: 16px 16px 16px 16px;
  flex-direction: row;
`;

export default Buttons;
