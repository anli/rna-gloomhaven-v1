import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import styled from 'styled-components/native';
import {Perk} from './components';
import usePerkUpdate from './hooks';

const PerkUpdateScreenComponent = () => {
  const {data, onSelect} = usePerkUpdate();

  return (
    <>
      <Screen testID="PerkUpdateScreen">
        <Body>
          <FlatList
            testID="PerkUpdateScreen.PerkList"
            data={data?.perks}
            renderItem={({item}) => (
              <Perk
                name={item.name}
                totalCount={item.totalCount}
                activeCount={item.activeCount}
                onPress={onSelect}
              />
            )}
            keyExtractor={item => item.name}
          />
        </Body>
        <Footer>
          <Buttons>
            <ConfirmButton testID="PerkUpdateScreen.DrawButton" mode="contained">
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
