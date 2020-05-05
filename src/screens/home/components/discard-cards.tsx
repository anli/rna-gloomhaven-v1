import React from 'react';
import {FlatList} from 'react-native';
import Card from './card';

interface Item {
  name: string;
}
const DiscardCards = ({data, testID}: {data: Item[]; testID: string}) => (
  <FlatList
    testID={testID}
    data={data}
    renderItem={({item, index}) => (
      <Card testID={`${testID}.Item.${index}`} name={item.name} />
    )}
    keyExtractor={(_, index) => String(index)}
    horizontal
  />
);

export default DiscardCards;
