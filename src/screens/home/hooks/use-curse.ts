import {Card, CombatModifierService} from '@combat-modifier';
import {removeOneCardByName, shuffle} from '@utils';
import R from 'ramda';

const getCurseCards = R.filter(R.propEq('name', 'curse'));

const useCurse = (drawCards: Card[], setDrawCards: (cards: Card[]) => any) => {
  const curseCount = getCurseCards(drawCards).length;

  const onAddCurse = () => {
    setDrawCards(shuffle([CombatModifierService.CARD.CURSE, ...drawCards]));
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
