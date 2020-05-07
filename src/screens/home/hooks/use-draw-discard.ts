import {Card, CombatModifierService} from '@combat-modifier';
import {shuffle} from '@utils';
import R from 'ramda';

const getWithoutBlessCurse = R.without([
  CombatModifierService.CARD.BLESS,
  CombatModifierService.CARD.CURSE,
]);

const useDrawDiscard = (
  drawCards: Card[],
  setDrawCards: (cards: Card[]) => any,
  discardCards: Card[],
  setDiscardCards: (cards: Card[]) => any,
) => {
  const onDraw = () => {
    if (drawCards.length > 0) {
      const [drawnCard, ...updatedDrawCards] = drawCards;
      setDrawCards(updatedDrawCards);
      setDiscardCards([drawnCard, ...discardCards]);
    }
  };

  const onShuffle = () => {
    setDrawCards(shuffle([...getWithoutBlessCurse(discardCards), ...drawCards]));
    setDiscardCards([]);
  };

  return {onDraw, onShuffle};
};

export default useDrawDiscard;
