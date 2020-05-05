import {Data} from '@services';
import {shuffle} from '@utils';
import R from 'ramda';

interface Card {
  name: string;
  imageUrl: string;
}

const useBlessCurse = (
  drawCards: Card[],
  setDrawCards: (cards: Card[]) => any,
) => {
  const getBlessCards = R.filter(R.propEq('name', 'bless'));
  const getCurseCards = R.filter(R.propEq('name', 'curse'));
  const getWithoutBlessCurse = R.without([Data.CARD.BLESS, Data.CARD.CURSE]);
  const blessCount = getBlessCards(drawCards).length;
  const curseCount = getCurseCards(drawCards).length;

  const onAddBless = () => {
    setDrawCards(shuffle([Data.CARD.BLESS, ...drawCards]));
  };

  const onAddCurse = () => {
    setDrawCards(shuffle([Data.CARD.CURSE, ...drawCards]));
  };

  const onRemoveBless = () => {
    const index = R.findIndex(R.propEq('name', 'bless'))(drawCards);
    if (index >= 0) {
      setDrawCards(R.remove<Card>(index, 1)(drawCards));
    }
  };

  const onRemoveCurse = () => {
    const index = R.findIndex(R.propEq('name', 'curse'))(drawCards);
    if (index >= 0) {
      setDrawCards(R.remove<Card>(index, 1)(drawCards));
    }
  };

  return {
    blessCount,
    onAddBless,
    onRemoveBless,
    curseCount,
    onAddCurse,
    onRemoveCurse,
    getWithoutBlessCurse,
  };
};

export default useBlessCurse;
