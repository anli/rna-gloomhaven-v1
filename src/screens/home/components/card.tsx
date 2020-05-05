import React, {PureComponent} from 'react';
import {Text, View} from 'react-native';

interface CardProps {
  name: string;
  testID: string;
}
class Card extends PureComponent<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default Card;
