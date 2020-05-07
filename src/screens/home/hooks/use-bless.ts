import {Card, CombatModifierService} from '@combat-modifier';
import {removeOneCardByName, shuffle} from '@utils';
import R from 'ramda';

const getBlessCards = R.filter(R.propEq('name', 'bless'));

const useBless = (drawCards: Card[], setDrawCards: (cards: Card[]) => any) => {
  const blessCount = getBlessCards(drawCards).length;

  const onAddBless = () => {
    setDrawCards(shuffle([CombatModifierService.CARD.BLESS, ...drawCards]));
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
