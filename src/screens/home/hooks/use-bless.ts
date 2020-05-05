import {Data} from '@services';
import {removeOneCardByName, shuffle} from '@utils';
import R from 'ramda';

interface Card {
  name: string;
  imageUrl: string;
}

const getBlessCards = R.filter(R.propEq('name', 'bless'));

const useBless = (drawCards: Card[], setDrawCards: (cards: Card[]) => any) => {
  const blessCount = getBlessCards(drawCards).length;

  const onAddBless = () => {
    setDrawCards(shuffle([Data.CARD.BLESS, ...drawCards]));
  };

  const onRemoveBless = () => {
    setDrawCards(removeOneCardByName('bless', drawCards));
  };

  return {
    blessCount,
    onAddBless,
    onRemoveBless,
  };
};

export default useBless;
