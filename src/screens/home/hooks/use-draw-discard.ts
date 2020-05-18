import {
  combatModifierSelectors,
  CombatModifierService,
  combatModifierSlice,
} from '@combat-modifier';
import {State} from '@store';
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
      combatModifierSlice.actions.setDrawCards([
        ...getWithoutBlessCurse(discardCards),
        ...drawCards,
      ]),
    );
    dispatch(combatModifierSlice.actions.setDiscardCards([]));
  };

  return {onDraw, onShuffle};
};

export default useDrawDiscard;
'';
