import React from 'react';
import {FlatList} from 'react-native';
import Card from './card';

interface Item {
  name: string;
  imageUrl: string;
  isShuffle?: boolean;
}
const DiscardCards = ({data, testID}: {data: Item[]; testID: string}) => (
  <FlatList
    testID={testID}
    data={data}
    renderItem={({item, index}) => (
      <Card
        testID={`${testID}.Item.${index}`}
        name={item.name}
        imageUrl={item.imageUrl}
      />
    )}
    keyExtractor={(_, index) => String(index)}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
);

export default DiscardCards;
