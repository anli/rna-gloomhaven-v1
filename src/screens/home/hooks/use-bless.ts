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

const getBlessCards = R.filter(R.propEq('name', 'bless'));

const useBless = (slice: SliceProps) => {
  const dispatch = useDispatch();
  const state = useSelector<RootState, State>(res => res[slice]);
  const drawCards = combatModifierSelectors.drawCards(state);
  const blessCount = getBlessCards(drawCards).length;

  const onAddBless = () => {
    dispatch(
      combatModifierSlices[slice].actions.setDrawCards(
        shuffle([CombatModifierService.CARD.BLESS, ...drawCards]),
      ),
    );
  };

  const onRemoveBless = () => {
    dispatch(
      combatModifierSlices[slice].actions.setDrawCards(
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
