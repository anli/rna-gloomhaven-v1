import R from 'ramda';
import React from 'react';
import {Checkbox, Colors, List} from 'react-native-paper';

interface Perk {
  name: string;
  totalCount: number;
  activeCount: number;
  onPress: (name: string) => void;
}

const Perk = ({name, totalCount, activeCount, onPress}: Perk) => {
  const checkboxes = [
    ...R.repeat<'checked'>('checked', activeCount),
    ...R.repeat<'unchecked'>('unchecked', totalCount - activeCount),
  ];
  return (
    <List.Item
      titleNumberOfLines={5}
      title={name}
      right={() => (
        <>
          {checkboxes.map((status, index) => (
            <Checkbox.Android key={index} color={Colors.grey400} status={status} />
          ))}
        </>
      )}
      onPress={() => onPress(name)}
    />
  );
};

export default Perk;
