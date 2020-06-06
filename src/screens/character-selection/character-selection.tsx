import {Screen, StatusBar} from '@components';
import React from 'react';
import {Button, useTheme} from 'react-native-paper';
import {FlatGrid} from 'react-native-super-grid';
import useCharacterSelection from './hooks';

const CharacterSelectionScreenComponent = () => {
  const {data, onSelect} = useCharacterSelection();
  const theme = useTheme();

  return (
    <>
      <StatusBar theme={theme} />
      <Screen theme={theme} testID="CharacterSelectionScreen">
        <FlatGrid
          itemDimension={130}
          items={data.characters}
          renderItem={({item}) => (
            <Item id={item.id} name={item.name} onPress={onSelect} />
          )}
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

interface Item {
  name: string;
  id: string;
  onPress: (name: string) => void;
}
const Item = ({id, name, onPress}: Item) => (
  <Button
    testID={`${name}Button`}
    mode="outlined"
    onPress={() => onPress(id)}
    uppercase={false}>
    {name}
  </Button>
);
