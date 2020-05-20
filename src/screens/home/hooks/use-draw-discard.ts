import {
  combatModifierSelectors,
  CombatModifierService,
  combatModifierSlice,
} from '@combat-modifier';
import {State} from '@store';
import {shuffle} from '@utils';
import R from 'ramda';
import {useDispatch, useSelector} from 'react-redux';

const getWithoutBlessCurse = R.without([
  CombatModifierService.CARD.BLESS,
  CombatModifierService.CARD.CURSE,
]);

const useDrawDiscard = () => {
  const dispatch = useDispatch();
  const state = useSelector<State, State>(res => res);
  const drawCards = combatModifierSelectors.drawCards(state);
  const discardCards = combatModifierSelectors.discardCards(state);

  const onDraw = () => {
    if (drawCards.length > 0) {
      const [drawnCard, ...updatedDrawCards] = drawCards;
      dispatch(combatModifierSlice.actions.setDrawCards(updatedDrawCards));
      dispatch(
        combatModifierSlice.actions.setDiscardCards([
          drawnCard,
          ...discardCards,
        ]),
      );
    }
  };

  const onShuffle = () => {
    dispatch(
      combatModifierSlice.actions.setDrawCards(
        shuffle([...getWithoutBlessCurse(discardCards), ...drawCards]),
      ),
    );
    dispatch(combatModifierSlice.actions.setDiscardCards([]));
  };

  const onTop = (index: number) => {
    const card = discardCards[index];
    const discards = R.remove(index, 1)(discardCards);
    dispatch(combatModifierSlice.actions.setDrawCards([card, ...drawCards]));
    dispatch(combatModifierSlice.actions.setDiscardCards(discards));
  };

  const onBottom = (index: number) => {
    const card = discardCards[index];
    const discards = R.remove(index, 1)(discardCards);
    dispatch(combatModifierSlice.actions.setDrawCards([...drawCards, card]));
    dispatch(combatModifierSlice.actions.setDiscardCards(discards));
  };

  return {onDraw, onShuffle, onTop, onBottom};
};

export default useDrawDiscard;
'';
