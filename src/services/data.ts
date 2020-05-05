import * as R from 'ramda';

const get = () => {
  return {character: 'Spellweaver', cards: BASE_CARDS};
};

export default class {
  static get = get;
}

class CARD {
  static ZERO = {name: '+0', imageUrl: 'https://i.imgur.com/EWDmUmh.png'};
  static PLUS_ONE = {name: '+1', imageUrl: 'https://i.imgur.com/IXOuNQ5.png'};
  static MINUS_ONE = {name: '-1', imageUrl: 'https://i.imgur.com/sSsPOyJ.png'};
  static PLUS_TWO = {name: '+2', imageUrl: 'https://i.imgur.com/wDSCoi8.png'};
  static MINUS_TWO = {name: '-2', imageUrl: 'https://i.imgur.com/jr9J5mY.png'};
  static MISS = {name: 'miss', imageUrl: 'https://i.imgur.com/02kf5La.png'};
  static DOUBLE = {name: 'x2', imageUrl: 'https://i.imgur.com/A7i7Rob.png'};
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
