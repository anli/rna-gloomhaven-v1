import React, {PureComponent} from 'react';
import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

interface CardProps {
  name: string;
  testID: string;
  imageUrl: string;
  isShuffle?: boolean;
}
class Card extends PureComponent<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    return (
      <Image
        isShuffle={this.props?.isShuffle}
        source={{uri: this.props.imageUrl}}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  }
}

export default Card;

const Image = styled(FastImage)`
  height: 100px;
  width: 150px;
  border-radius: 8px;
  margin-left: 16px;
  border-color: red;
  border-width: ${props => (props.isShuffle ? '4px' : '0px')};
`;
