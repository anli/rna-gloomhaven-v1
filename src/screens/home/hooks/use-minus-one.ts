import {
  combatModifierSelectors,
  CombatModifierService,
  combatModifierSlices,
  SliceProps,
  State,
} from '@combat-modifier';
import {State as RootState} from '@store';
import {removeOneCardByName, shuffle} from '@utils';
import R from 'ramda';
import {useDispatch, useSelector} from 'react-redux';

const getMinusOneCards = R.filter(R.propEq('name', '-1'));

const useMinusOne = (slice: SliceProps) => {
  const dispatch = useDispatch();
  const state = useSelector<RootState, State>(res => res[slice]);
  const drawCards = combatModifierSelectors.drawCards(state);
  const discardCards = combatModifierSelectors.discardCards(state);
  const minusOneCards = combatModifierSelectors.minusOneCards(state);

  const cards = R.concat(drawCards, discardCards);
  const minusOneCount = getMinusOneCards(cards).length;

  const onAddMinusOne = () => {
    if (minusOneCards.length > 0) {
      dispatch(
        combatModifierSlices[slice].actions.setDrawCards(
          shuffle([CombatModifierService.CARD.MINUS_ONE, ...drawCards]),
        ),
      );
      dispatch(
        combatModifierSlices[slice].actions.setMinusOneCards(
          R.tail(minusOneCards),
        ),
      );
      return;
    }
  };

  const onRemoveMinusOne = () => {
    const index = R.findIndex(R.propEq('name', '-1'))(discardCards);

    /* istanbul ignore next */
    if (index >= 0) {
      dispatch(
        combatModifierSlices[slice].actions.setDiscardCards(
          removeOneCardByName('-1', discardCards),
        ),
      );
      dispatch(
        combatModifierSlices[slice].actions.setMinusOneCards([
          ...minusOneCards,
          CombatModifierService.CARD.MINUS_ONE,
        ]),
      );
      return;
    }

    const indexDraw = R.findIndex(R.propEq('name', '-1'))(drawCards);
    /* istanbul ignore next */
    if (indexDraw >= 0) {
      dispatch(
        combatModifierSlices[slice].actions.setDrawCards(
          removeOneCardByName('-1', drawCards),
        ),
      );
      dispatch(
        combatModifierSlices[slice].actions.setMinusOneCards([
          ...minusOneCards,
          CombatModifierService.CARD.MINUS_ONE,
        ]),
      );
    }
  };

  return {
    minusOneCount,
    onAddMinusOne,
    onRemoveMinusOne,
  };
};

export default useMinusOne;
