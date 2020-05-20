import React from 'react';
import {FlatList} from 'react-native';
import Card from './card';

interface Item {
  name: string;
  imageUrl: string;
  isShuffle?: boolean;
}
const DiscardCards = ({
  data,
  testID,
  onTop,
  onBottom,
  showTopBottomButtons,
}: {
  data: Item[];
  testID: string;
  onTop: (index: number) => any;
  onBottom: (index: number) => any;
  showTopBottomButtons: boolean;
}) => (
  <FlatList
    testID={testID}
    data={data}
    renderItem={({item, index}) => (
      <Card
        showTopBottomButtons={showTopBottomButtons}
        testID={`${testID}.Item.${index}`}
        name={item.name}
        imageUrl={item.imageUrl}
        onTop={() => onTop(index)}
        onBottom={() => onBottom(index)}
      />
    )}
    keyExtractor={(_, index) => String(index)}
    horizontal
    showsHorizontalScrollIndicator={false}
  />
);

export default DiscardCards;
