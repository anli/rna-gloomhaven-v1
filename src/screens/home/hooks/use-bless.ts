import {Data} from '@services';
import {shuffle} from '@utils';
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
    const index = R.findIndex(R.propEq('name', 'bless'))(drawCards);
    if (index >= 0) {
      setDrawCards(R.remove<Card>(index, 1)(drawCards));
    }
  };

  return {
    blessCount,
    onAddBless,
    onRemoveBless,
  };
};

export default useBless;
