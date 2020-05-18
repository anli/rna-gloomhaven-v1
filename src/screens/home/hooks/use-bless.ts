import {
  combatModifierSelectors,
  CombatModifierService,
  combatModifierSlice,
} from '@combat-modifier';
import {State} from '@store';
import {removeOneCardByName, shuffle} from '@utils';
import R from 'ramda';
import {useDispatch, useSelector} from 'react-redux';

const getBlessCards = R.filter(R.propEq('name', 'bless'));

const useBless = () => {
  const dispatch = useDispatch();
  const state = useSelector<State, State>(res => res);
  const drawCards = combatModifierSelectors.drawCards(state);
  const blessCount = getBlessCards(drawCards).length;

  const onAddBless = () => {
    dispatch(
      combatModifierSlice.actions.setDrawCards(
        shuffle([CombatModifierService.CARD.BLESS, ...drawCards]),
      ),
    );
  };

  const onRemoveBless = () => {
    dispatch(
      combatModifierSlice.actions.setDrawCards(
        removeOneCardByName('bless', drawCards),
      ),
    );
  };

  return {
    blessCount,
    onAddBless,
    onRemoveBless,
  };
};

export default useBless;
