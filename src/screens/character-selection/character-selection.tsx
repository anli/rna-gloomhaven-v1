import React from 'react';
import {Button} from 'react-native-paper';
import {FlatGrid} from 'react-native-super-grid';
import styled from 'styled-components/native';
import useCharacterSelection from './hooks';

const CharacterSelectionScreenComponent = () => {
  const {data, onSelect} = useCharacterSelection();

  return (
    <>
      <Screen testID="CharacterSelectionScreen">
        <FlatGrid
          itemDimension={130}
          items={data.characters}
          renderItem={({item}) => <Item name={item} onPress={onSelect} />}
          spacing={16}
        />
      </Screen>
    </>
  );
};

const CharacterSelectionScreenOptions = {
  headerShown: true,
  title: 'Characters',
};

export default class {
  static Component = CharacterSelectionScreenComponent;
  static Options = CharacterSelectionScreenOptions;
}

const Screen = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;

interface Item {
  name: string;
  onPress: (name: string) => void;
}
const Item = ({name, onPress}: Item) => (
  <Button
    testID={`${name}Button`}
    mode="outlined"
    onPress={() => onPress(name)}
    uppercase={false}>
    {name}
  </Button>
);
