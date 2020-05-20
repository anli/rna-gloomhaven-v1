import React, {PureComponent} from 'react';
import FastImage from 'react-native-fast-image';
import {IconButton} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import styled from 'styled-components/native';

interface CardProps {
  name: string;
  testID: string;
  imageUrl: string;
  onTop: () => any;
  onBottom: () => any;
  showTopBottomButtons: boolean;
}
class Card extends PureComponent<CardProps> {
  constructor(props: CardProps) {
    super(props);
  }

  render() {
    return (
      <Image
        source={{uri: this.props.imageUrl}}
        resizeMode={FastImage.resizeMode.cover}>
        {this.props.showTopBottomButtons && (
          <>
            <Button
              testID="Card.TopButton"
              color={Colors.white}
              size={20}
              icon="format-align-bottom"
              onPress={this.props.onTop}
            />
            <Button
              testID="Card.BottomButton"
              color={Colors.white}
              size={20}
              icon="format-align-top"
              onPress={this.props.onBottom}
            />
          </>
        )}
      </Image>
    );
  }
}

// AI_TOP: 'format-align-bottom',
//   AI_BOTTOM: 'format-align-top',
export default Card;

const Image = styled(FastImage)`
  height: 100px;
  width: 150px;
  border-radius: 8px;
  margin-left: 16px;
  border-color: red;
  flex-direction: row;
  justify-content: space-between;
`;

const Button = styled(IconButton)`
  background-color: gray;
`;
