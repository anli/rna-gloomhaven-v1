import {Buttons, Screen, StatusBar} from '@components';
import React from 'react';
import {ScrollView} from 'react-native';
import {Button, useTheme} from 'react-native-paper';
import styled from 'styled-components/native';
import {Perk} from './components';
import usePerkUpdate from './hooks';

const PerkUpdateScreenComponent = () => {
  const {data, onSelect, onSubmit} = usePerkUpdate();
  const theme = useTheme();

  return (
    <>
      <StatusBar theme={theme} />
      <Screen theme={theme} testID="PerkUpdateScreen">
        <Body>
          <ScrollView testID="PerkUpdateScreen.PerkList">
            {data?.perks.map(item => (
              <Perk
                key={item.name}
                name={item.name}
                totalCount={item.totalCount}
                activeCount={item.activeCount}
                onPress={onSelect}
              />
            ))}
          </ScrollView>
        </Body>
        <Footer>
          <Buttons theme={theme}>
            <ConfirmButton
              testID="PerkUpdateScreen.ConfirmButton"
              mode="contained"
              onPress={onSubmit}>
              Confirm
            </ConfirmButton>
          </Buttons>
        </Footer>
      </Screen>
    </>
  );
};

const PerkUpdateScreenOptions = {headerShown: true, title: 'Perks'};

export default class {
  static Component = PerkUpdateScreenComponent;
  static Options = PerkUpdateScreenOptions;
}

const ConfirmButton = styled(Button)`
  flex: 1;
`;

const Body = styled.View`
  flex: 1;
`;
const Footer = styled.View``;
