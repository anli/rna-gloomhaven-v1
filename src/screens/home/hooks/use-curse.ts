import {
  combatModifierSelectors,
  CombatModifierService,
  combatModifierSlice,
} from '@combat-modifier';
import {State} from '@store';
import {removeOneCardByName, shuffle} from '@utils';
import R from 'ramda';
import {useDispatch, useSelector} from 'react-redux';

const getCurseCards = R.filter(R.propEq('name', 'curse'));

const useCurse = () => {
  const dispatch = useDispatch();
  const state = useSelector<State, State>(res => res);
  const drawCards = combatModifierSelectors.drawCards(state);

  const curseCount = getCurseCards(drawCards).length;

  const onAddCurse = () => {
    dispatch(
      combatModifierSlice.actions.setDrawCards(
        shuffle([CombatModifierService.CARD.CURSE, ...drawCards]),
      ),
    );
  };

  const onRemoveCurse = () => {
    dispatch(
      combatModifierSlice.actions.setDrawCards(
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
