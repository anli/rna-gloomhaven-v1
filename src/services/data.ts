import * as R from 'ramda';
import {useEffect} from 'react';
import FastImage from 'react-native-fast-image';

const get = () => {
  return {character: 'Spellweaver', cards: BASE_CARDS};
};

class CARD {
  static ZERO = {name: '+0', imageUrl: 'https://i.imgur.com/EWDmUmh.png'};
  static PLUS_ONE = {name: '+1', imageUrl: 'https://i.imgur.com/IXOuNQ5.png'};
  static MINUS_ONE = {name: '-1', imageUrl: 'https://i.imgur.com/sSsPOyJ.png'};
  static PLUS_TWO = {name: '+2', imageUrl: 'https://i.imgur.com/wDSCoi8.png'};
  static MINUS_TWO = {name: '-2', imageUrl: 'https://i.imgur.com/jr9J5mY.png'};
  static MISS = {name: 'miss', imageUrl: 'https://i.imgur.com/02kf5La.png'};
  static DOUBLE = {name: 'x2', imageUrl: 'https://i.imgur.com/A7i7Rob.png'};
  static BLESS = {name: 'bless', imageUrl: 'https://i.imgur.com/mDuj3ym.png'};
  static CURSE = {name: 'curse', imageUrl: 'https://i.imgur.com/UklRkDR.png'};
}

const BASE_CARDS = [
  ...R.repeat(CARD.ZERO, 6),
  ...R.repeat(CARD.PLUS_ONE, 5),
  ...R.repeat(CARD.MINUS_ONE, 5),
  ...R.repeat(CARD.PLUS_TWO, 1),
  ...R.repeat(CARD.MINUS_TWO, 1),
  ...R.repeat(CARD.MISS, 1),
  ...R.repeat(CARD.DOUBLE, 1),
];

/* istanbul ignore next */
const usePreloadImages = () => {
  const preloadImages = () => {
    const cards: any[] = R.values(CARD);
    const getImageUris = R.map(({imageUrl}: {imageUrl: string}) => ({
      uri: imageUrl,
    }));
    FastImage.preload(getImageUris(cards));
  };

  useEffect(() => {
    preloadImages();
  }, []);
};

export default class {
  static get = get;
  static CARD = CARD;
  static usePreloadImages = usePreloadImages;
}
