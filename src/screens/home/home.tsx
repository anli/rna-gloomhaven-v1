import React from 'react';
import {Badge, Button, Headline} from 'react-native-paper';
import styled from 'styled-components/native';
import {DiscardCards} from './components';
import useHome from './hooks';

const HomeScreenComponent = () => {
  const {data, onDraw, onShuffle} = useHome();

  return (
    <>
      <Screen>
        <Headline>{data?.character}</Headline>
        <DrawButton
          testID="HomeScreen.DrawButton"
          mode="contained"
          onPress={onDraw}>
          Draw
        </DrawButton>
        <ShuffleButton
          testID="HomeScreen.ShuffleButton"
          mode="contained"
          onPress={onShuffle}>
          Shuffle
        </ShuffleButton>
        <DrawCardsCount>{data?.drawCards.length}</DrawCardsCount>
        <DiscardCards
          testID="HomeScreen.DiscardCards"
          data={data.discardCards}
        />
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
  width: 200px;
`;

const ShuffleButton = styled(Button)`
  width: 200px;
`;

const DrawCardsCount = styled(Badge)``;
