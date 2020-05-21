import {
  combatModifierSelectors,
  CombatModifierService,
  combatModifierSlices,
  SliceProps,
  State,
} from '@combat-modifier';
import {State as RootState} from '@store';
import {shuffle} from '@utils';
import R from 'ramda';
import {useDispatch, useSelector} from 'react-redux';

const getWithoutBlessCurse = R.without([
  CombatModifierService.CARD.BLESS,
  CombatModifierService.CARD.CURSE,
]);

const useDrawDiscard = (slice: SliceProps) => {
  const dispatch = useDispatch();
  const state = useSelector<RootState, State>(res => res[slice]);
  const drawCards = combatModifierSelectors.drawCards(state);
  const discardCards = combatModifierSelectors.discardCards(state);

  const onDraw = () => {
    if (drawCards.length > 0) {
      const [drawnCard, ...updatedDrawCards] = drawCards;
      dispatch(
        combatModifierSlices[slice].actions.setDrawCards(updatedDrawCards),
      );
      dispatch(
        combatModifierSlices[slice].actions.setDiscardCards([
          drawnCard,
          ...discardCards,
        ]),
      );
    }
  };

  const onShuffle = () => {
    dispatch(
      combatModifierSlices[slice].actions.setDrawCards(
        shuffle([...getWithoutBlessCurse(discardCards), ...drawCards]),
      ),
    );
    dispatch(combatModifierSlices[slice].actions.setDiscardCards([]));
  };

  const onTop = (index: number) => {
    const card = discardCards[index];
    const discards = R.remove(index, 1)(discardCards);
    dispatch(
      combatModifierSlices[slice].actions.setDrawCards([card, ...drawCards]),
    );
    dispatch(combatModifierSlices[slice].actions.setDiscardCards(discards));
  };

  const onBottom = (index: number) => {
    const card = discardCards[index];
    const discards = R.remove(index, 1)(discardCards);
    dispatch(
      combatModifierSlices[slice].actions.setDrawCards([...drawCards, card]),
    );
    dispatch(combatModifierSlices[slice].actions.setDiscardCards(discards));
  };

  return {onDraw, onShuffle, onTop, onBottom};
};

export default useDrawDiscard;
'';
