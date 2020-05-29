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

const getEquipmentCards = R.filter(R.propEq('name', 'EQUIPMENT'));

const useEquipment = (slice: SliceProps) => {
  const dispatch = useDispatch();
  const state = useSelector<RootState, State>(res => res[slice]);
  const drawCards = combatModifierSelectors.drawCards(state);
  const discardCards = combatModifierSelectors.discardCards(state);

  const cards = R.concat(drawCards, discardCards);
  const equipmentCount = getEquipmentCards(cards).length;

  const onAddEquipment = () => {
    dispatch(
      combatModifierSlices[slice].actions.setDrawCards(
        shuffle([CombatModifierService.CARD.EQUIPMENT, ...drawCards]),
      ),
    );
  };

  const onRemoveEquipment = () => {
    const index = R.findIndex(R.propEq('name', 'EQUIPMENT'))(discardCards);

    /* istanbul ignore next */
    if (index >= 0) {
      dispatch(
        combatModifierSlices[slice].actions.setDiscardCards(
          removeOneCardByName('EQUIPMENT', discardCards),
        ),
      );
      return;
    }

    dispatch(
      combatModifierSlices[slice].actions.setDrawCards(
        removeOneCardByName('EQUIPMENT', drawCards),
      ),
    );
  };

  return {
    equipmentCount,
    onAddEquipment,
    onRemoveEquipment,
  };
};

export default useEquipment;
