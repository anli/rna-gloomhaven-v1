import R from 'ramda';

export {default as shuffle} from './shuffle';

export const removeOneCardByName = (name: string, cards: any[]) => {
  const index = R.findIndex(R.propEq('name', name))(cards);
  if (index >= 0) {
    return R.remove(index, 1)(cards);
  }

  return cards;
};
