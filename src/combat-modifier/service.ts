import * as R from 'ramda';
import {useEffect} from 'react';
import FastImage from 'react-native-fast-image';

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
  static PLUS_ZERO_STUN = {
    name: '+0 STUN',
    imageUrl: 'https://i.imgur.com/OCtj089.png',
  };
  static PLUS_ONE_WOUND = {
    name: '+1 WOUND',
    imageUrl: 'https://i.imgur.com/qz3PJWi.png',
  };
  static PLUS_ONE_IMMOBILIZE = {
    name: '+1 IMMOBILIZE',
    imageUrl: 'https://i.imgur.com/2WxjK6P.png',
  };
  static PLUS_ONE_CURSE = {
    name: '+1 CURSE',
    imageUrl: 'https://i.imgur.com/ZjGMg4V.png',
  };
  static PLUS_TWO_FIRE = {
    name: '+2 FIRE',
    imageUrl: 'https://i.imgur.com/ihyEuHA.png',
  };
  static PLUS_TWO_ICE = {
    name: '+2 ICE',
    imageUrl: 'https://i.imgur.com/8NKtTFi.png',
  };
  static ROLLING_EARTH = {
    name: '⤵ EARTH',
    imageUrl: 'https://i.imgur.com/1W2T8Rx.png',
  };
  static ROLLING_AIR = {
    name: '⤵ AIR',
    imageUrl: 'https://i.imgur.com/Yfie493.png',
  };
  static ROLLING_LIGHT = {
    name: '⤵ LIGHT',
    imageUrl: 'https://i.imgur.com/XEKY9Wo.png',
  };
  static ROLLING_DARK = {
    name: '⤵ DARK',
    imageUrl: 'https://i.imgur.com/eq7Kd9c.png',
  };
}

const PERK = {
  REMOVE_FOUR_PLUS_ZERO: {
    name: 'Remove four +0 cards',
    totalCount: 1,
    activeCount: 0,
  },
  REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE: {
    name: 'Replace one -1 card with one +1 card',
    totalCount: 2,
    activeCount: 0,
  },
  ADD_TWO_PLUS_ONE: {name: 'Add two +1 cards', totalCount: 2, activeCount: 0},
  ADD_ONE_PLUS_ZERO_STUN: {
    name: 'Add one +0 STUN card',
    totalCount: 1,
    activeCount: 0,
  },
  ADD_ONE_PLUS_ONE_WOUND: {
    name: 'Add one +1 WOUND card',
    totalCount: 1,
    activeCount: 0,
  },
  ADD_ONE_PLUS_ONE_IMMOBILIZE: {
    name: 'Add one +1 IMMOBILIZE card',
    totalCount: 1,
    activeCount: 0,
  },
  ADD_ONE_PLUS_ONE_CURSE: {
    name: 'Add one +1 CURSE card',
    totalCount: 1,
    activeCount: 0,
  },
  ADD_ONE_PLUS_TWO_FIRE: {
    name: 'Add one +2 FIRE card',
    totalCount: 1,
    activeCount: 0,
  },
  ADD_ONE_PLUS_TWO_ICE: {
    name: 'Add one +2 ICE card',
    totalCount: 1,
    activeCount: 0,
  },
  ADD_ONE_ROLLING_EARTH_AND_ONE_ROLLING_AIR: {
    name: 'Add one ⤵ EARTH and one ⤵ AIR card',
    totalCount: 1,
    activeCount: 0,
  },
  ADD_ONE_ROLLING_LIGHT_AND_ONE_ROLLING_DARK: {
    name: 'Add one ⤵ LIGHT and one ⤵ DARK card',
    totalCount: 1,
    activeCount: 0,
  },
};

const CHARACTER = {
  SPELLWEAVER: {
    perks: [
      PERK.REMOVE_FOUR_PLUS_ZERO,
      PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE,
      PERK.ADD_TWO_PLUS_ONE,
      PERK.ADD_ONE_PLUS_ZERO_STUN,
      PERK.ADD_ONE_PLUS_ONE_WOUND,
      PERK.ADD_ONE_PLUS_ONE_IMMOBILIZE,
      PERK.ADD_ONE_PLUS_ONE_CURSE,
      PERK.ADD_ONE_PLUS_TWO_FIRE,
      PERK.ADD_ONE_PLUS_TWO_ICE,
      PERK.ADD_ONE_ROLLING_EARTH_AND_ONE_ROLLING_AIR,
      PERK.ADD_ONE_ROLLING_LIGHT_AND_ONE_ROLLING_DARK,
    ],
  },
};

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
  static CARD = CARD;
  static usePreloadImages = usePreloadImages;
  static PERK = PERK;
  static CHARACTER = CHARACTER;
  static BASE_CARDS = BASE_CARDS;
}
