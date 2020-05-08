import {Card, CombatModifierService} from '@combat-modifier';
import {removeOneCardByName, shuffle} from '@utils';
import R from 'ramda';

const getEquipmentCards = R.filter(R.propEq('name', 'EQUIPMENT'));

const useEquipment = (
  drawCards: Card[],
  setDrawCards: (cards: Card[]) => any,
  discardCards: Card[],
  setDiscardCards: (cards: Card[]) => any,
) => {
  const cards = R.concat(drawCards, discardCards);
  const equipmentCount = getEquipmentCards(cards).length;

  const onAddEquipment = () => {
    setDrawCards(shuffle([CombatModifierService.CARD.EQUIPMENT, ...drawCards]));
  };

  const onRemoveEquipment = () => {
    const index = R.findIndex(R.propEq('name', 'EQUIPMENT'))(discardCards);

    /* istanbul ignore next */
    if (index >= 0) {
      return setDiscardCards(removeOneCardByName('EQUIPMENT', discardCards));
    }

    return setDrawCards(removeOneCardByName('EQUIPMENT', drawCards));
  };

  return {
    equipmentCount,
    onAddEquipment,
    onRemoveEquipment,
  };
};

export default useEquipment;
