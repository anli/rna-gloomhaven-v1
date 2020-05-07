import React from 'react';
import {ScrollView} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import {Perk} from './components';
import usePerkUpdate from './hooks';

const PerkUpdateScreenComponent = () => {
  const {data, onSelect, onSubmit} = usePerkUpdate();

  return (
    <>
      <Screen testID="PerkUpdateScreen">
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
          <Buttons>
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

const Screen = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;
const ConfirmButton = styled(Button)`
  flex: 1;
`;

const Buttons = styled.View`
  background-color: white;
  height: 72px;
  padding: 16px 16px 16px 16px;
  flex-direction: row;
`;

const Body = styled.View`
  flex: 1;
`;
const Footer = styled.View``;
