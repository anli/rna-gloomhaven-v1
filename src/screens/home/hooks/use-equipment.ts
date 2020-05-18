import {
  combatModifierSelectors,
  CombatModifierService,
  combatModifierSlice,
} from '@combat-modifier';
import {State} from '@store';
import {removeOneCardByName, shuffle} from '@utils';
import R from 'ramda';
import {useDispatch, useSelector} from 'react-redux';

const getEquipmentCards = R.filter(R.propEq('name', 'EQUIPMENT'));

const useEquipment = () => {
  const dispatch = useDispatch();
  const state = useSelector<State, State>(res => res);
  const drawCards = combatModifierSelectors.drawCards(state);
  const discardCards = combatModifierSelectors.discardCards(state);

  const cards = R.concat(drawCards, discardCards);
  const equipmentCount = getEquipmentCards(cards).length;

  const onAddEquipment = () => {
    dispatch(
      combatModifierSlice.actions.setDrawCards(
        shuffle([CombatModifierService.CARD.EQUIPMENT, ...drawCards]),
      ),
    );
  };

  const onRemoveEquipment = () => {
    const index = R.findIndex(R.propEq('name', 'EQUIPMENT'))(discardCards);

    /* istanbul ignore next */
    if (index >= 0) {
      return dispatch(
        combatModifierSlice.actions.setDiscardCards(
          shuffle(removeOneCardByName('EQUIPMENT', discardCards)),
        ),
      );
    }

    dispatch(
      combatModifierSlice.actions.setDrawCards(
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
