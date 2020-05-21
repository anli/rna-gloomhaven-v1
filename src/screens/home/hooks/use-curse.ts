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

const getCurseCards = R.filter(R.propEq('name', 'curse'));

const useCurse = (slice: SliceProps) => {
  const dispatch = useDispatch();
  const state = useSelector<RootState, State>(res => res[slice]);
  const drawCards = combatModifierSelectors.drawCards(state);

  const curseCount = getCurseCards(drawCards).length;

  const onAddCurse = () => {
    dispatch(
      combatModifierSlices[slice].actions.setDrawCards(
        shuffle([CombatModifierService.CARD.CURSE, ...drawCards]),
      ),
    );
  };

  const onRemoveCurse = () => {
    dispatch(
      combatModifierSlices[slice].actions.setDrawCards(
        removeOneCardByName('curse', drawCards),
      ),
    );
  };

  return {
    curseCount,
    onAddCurse,
    onRemoveCurse,
  };
};

export default useCurse;
