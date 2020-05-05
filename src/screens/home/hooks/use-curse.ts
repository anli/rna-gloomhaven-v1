import {Data} from '@services';
import {removeOneCardByName, shuffle} from '@utils';
import R from 'ramda';

interface Card {
  name: string;
  imageUrl: string;
}

const getCurseCards = R.filter(R.propEq('name', 'curse'));

const useCurse = (drawCards: Card[], setDrawCards: (cards: Card[]) => any) => {
  const curseCount = getCurseCards(drawCards).length;

  const onAddCurse = () => {
    setDrawCards(shuffle([Data.CARD.CURSE, ...drawCards]));
  };

  const onRemoveCurse = () => {
    setDrawCards(removeOneCardByName('curse', drawCards));
  };

  return {
    curseCount,
    onAddCurse,
    onRemoveCurse,
  };
};

export default useCurse;
