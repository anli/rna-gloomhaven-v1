import R from 'ramda';
import CombatModifierService from '../service';
import {Card, Perk} from '../store';

const getRemoveCards = (name: string, count: number, cards: Card[]) => {
  const index = R.findIndex(R.propEq('name', name))(cards);
  return R.remove<Card>(index, count);
};

const getAddCards = (card: Card, count: number) => {
  const cards = R.repeat(card, count);
  return R.concat(cards);
};

const getCardsByPerk = (acc: Card[], ele: Perk) => {
  switch (ele.name) {
    case CombatModifierService.PERK.REMOVE_FOUR_PLUS_ZERO.name:
      return getRemoveCards(
        CombatModifierService.CARD.ZERO.name,
        ele.activeCount * 4,
        acc,
      )(acc);

    case CombatModifierService.PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE
      .name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.MINUS_ONE.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.PLUS_ONE, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_PLUS_ONE.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_ONE,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_PLUS_ZERO_STUN.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_ZERO_STUN,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_PLUS_ONE_WOUND.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_ONE_WOUND,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_PLUS_ONE_IMMOBILIZE.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_ONE_IMMOBILIZE,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_PLUS_ONE_CURSE.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_ONE_CURSE,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_PLUS_TWO_FIRE.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_TWO_FIRE,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_PLUS_TWO_ICE.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_TWO_ICE,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_ROLLING_EARTH_AND_ONE_ROLLING_AIR
      .name:
      return R.pipe(
        getAddCards(CombatModifierService.CARD.ROLLING_EARTH, ele.activeCount),
        getAddCards(CombatModifierService.CARD.ROLLING_AIR, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_ROLLING_LIGHT_AND_ONE_ROLLING_DARK
      .name:
      return R.pipe(
        getAddCards(CombatModifierService.CARD.ROLLING_LIGHT, ele.activeCount),
        getAddCards(CombatModifierService.CARD.ROLLING_DARK, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_MINUS_TWO_AND_TWO_PLUS_TWO.name:
      return R.pipe(
        getAddCards(CombatModifierService.CARD.MINUS_TWO, ele.activeCount),
        getAddCards(CombatModifierService.CARD.PLUS_TWO, ele.activeCount * 2),
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_PLUS_TWO_MUDDLE.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_TWO_MUDDLE,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_ROLLING_PUSH_TWO.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_PUSH_TWO,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_ROLLING_EARTH.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_EARTH,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_ROLLING_AIR.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_AIR,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.REMOVE_TWO_MINUS_ONE.name:
      return getRemoveCards(
        CombatModifierService.CARD.MINUS_ONE.name,
        ele.activeCount * 2,
        acc,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_PLUS_THREE.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_THREE,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.ADD_THREE_ROLLING_PUSH_ONE.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_PUSH_ONE,
        ele.activeCount * 3,
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_ROLLING_PIERCE_THREE.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_PIERCE_THREE,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_ROLLING_STUN.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_STUN,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK
      .ADD_ONE_ROLLING_DISARM_AND_ONE_ROLLING_MUDDLE.name:
      return R.pipe(
        getAddCards(CombatModifierService.CARD.ROLLING_DISARM, ele.activeCount),
        getAddCards(CombatModifierService.CARD.ROLLING_MUDDLE, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_ROLLING_ADD_TARGET.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_ADD_TARGET,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_PLUS_ONE_SHIELD_ONE.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_ONE_SHIELD_ONE,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK
      .IGNORE_NEGATIVE_ITEM_EFFECTS_AND_ADD_ONE_PLUS_ONE.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_ONE,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.REPLACE_TWO_PLUS_ONE_WITH_TWO_PLUS_TWO.name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.PLUS_ONE.name,
          ele.activeCount * 2,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.PLUS_TWO, ele.activeCount * 2),
      )(acc);

    case CombatModifierService.PERK.REPLACE_ONE_MINUS_TWO_WITH_ONE_PLUS_ZERO
      .name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.MINUS_TWO.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.ZERO, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_ROLLING_PLUS_ONE.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_PLUS_ONE,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.ADD_THREE_ROLLING_MUDDLE.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_MUDDLE,
        ele.activeCount * 3,
      )(acc);

    case CombatModifierService.PERK.ADD_THREE_ROLLING_PULL_ONE.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_PULL_ONE,
        ele.activeCount * 3,
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_ROLLING_IMMOBILIZE.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_IMMOBILIZE,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO.name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.ZERO.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.PLUS_TWO, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_ROLLING_POISON.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_POISON,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_ROLLING_MUDDLE.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_MUDDLE,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_ROLLING_INVISIBLE.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_INVISIBLE,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_ROLLING_FIRE.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_FIRE,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_PLUS_ONE_HEAL_TWO.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_ONE_HEAL_TWO,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_ZERO_ADD_TARGET.name:
      return getAddCards(
        CombatModifierService.CARD.ZERO_ADD_TARGET,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_ROLLING_HEAL_ONE.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_HEAL_ONE,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.REPLACE_ONE_ZERO_WITH_ONE_ROLLING_PLUS_TWO
      .name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.ZERO.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(
          CombatModifierService.CARD.ROLLING_PLUS_TWO,
          ele.activeCount,
        ),
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_ROLLING_WOUND.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_WOUND,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_ROLLING_MINUS_ONE_DISARM.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_MINUS_ONE_DISARM,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK.REMOVE_ONE_MINUS_TWO.name:
      return getRemoveCards(
        CombatModifierService.CARD.MINUS_TWO.name,
        ele.activeCount,
        acc,
      )(acc);

    case CombatModifierService.PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE_AIR
      .name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.MINUS_ONE.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.PLUS_ONE_AIR, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK
      .REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE_EARTH.name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.MINUS_ONE.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.PLUS_ONE_EARTH, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK
      .REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE_LIGHT.name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.MINUS_ONE.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.PLUS_ONE_LIGHT, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_PLUS_ONE_DARK
      .name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.MINUS_ONE.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.PLUS_ONE_DARK, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK.ADD_ONE_PLUS_ONE_POISON.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_ONE_POISON,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK
      .IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD_ONE_PLUS_ONE.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_ONE,
        ele.activeCount,
      )(acc);

    case CombatModifierService.PERK
      .REPLACE_TWO_PLUS_ONE_WITH_ONE_PLUS_THREE_SHIELD_ONE_SELF.name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.PLUS_ONE.name,
          ele.activeCount * 2,
          acc,
        ),
        getAddCards(
          CombatModifierService.CARD.PLUS_THREE_SHIELD_ONE_SELF,
          ele.activeCount,
        ),
      )(acc);

    case CombatModifierService.PERK
      .REPLACE_ONE_ZERO_WITH_ONE_PLUS_ONE_SHIELD_ONE_ALLY.name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.ZERO.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(
          CombatModifierService.CARD.PLUS_ONE_SHIELD_ONE_ALLY,
          ele.activeCount,
        ),
      )(acc);

    case CombatModifierService.PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_DARK
      .name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.ZERO.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.PLUS_TWO_DARK, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_LIGHT
      .name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.ZERO.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.PLUS_TWO_LIGHT, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_THREE_MUDDLE
      .name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.ZERO.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(
          CombatModifierService.CARD.PLUS_THREE_MUDDLE,
          ele.activeCount,
        ),
      )(acc);

    case CombatModifierService.PERK.REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_CURSE
      .name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.ZERO.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.PLUS_TWO_CURSE, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK
      .REPLACE_ONE_ZERO_WITH_ONE_PLUS_TWO_REGENERATE_SELF.name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.ZERO.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(
          CombatModifierService.CARD.PLUS_TWO_REGENERATE_SELF,
          ele.activeCount,
        ),
      )(acc);

    case CombatModifierService.PERK.REPLACE_ONE_MINUS_ONE_WITH_ONE_HEAL_TWO_ALLY
      .name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.MINUS_ONE.name,
          ele.activeCount,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.HEAL_TWO_ALLY, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK
      .IGNORE_NEGATIVE_SCENARIO_EFFECTS_AND_ADD_TWO_PLUS_ONE.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_ONE,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_ROLLING_CURSE.name:
      return getAddCards(
        CombatModifierService.CARD.ROLLING_CURSE,
        ele.activeCount * 2,
      )(acc);

    case CombatModifierService.PERK.REPLACE_TWO_ZERO_WITH_TWO_PLUS_ONE.name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.ZERO.name,
          ele.activeCount * 2,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.PLUS_ONE, ele.activeCount * 2),
      )(acc);

    case CombatModifierService.PERK.ADD_THREE_FIRE.name:
      return getAddCards(
        CombatModifierService.CARD.FIRE,
        ele.activeCount * 3,
      )(acc);

    case CombatModifierService.PERK.ADD_THREE_ICE.name:
      return getAddCards(
        CombatModifierService.CARD.ICE,
        ele.activeCount * 3,
      )(acc);

    case CombatModifierService.PERK.ADD_THREE_AIR.name:
      return getAddCards(
        CombatModifierService.CARD.AIR,
        ele.activeCount * 3,
      )(acc);

    case CombatModifierService.PERK.ADD_THREE_EARTH.name:
      return getAddCards(
        CombatModifierService.CARD.EARTH,
        ele.activeCount * 3,
      )(acc);

    case CombatModifierService.PERK.REPLACE_TWO_ZERO_WITH_ONE_FIRE_AND_ONE_EARTH
      .name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.ZERO.name,
          ele.activeCount * 2,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.FIRE, ele.activeCount),
        getAddCards(CombatModifierService.CARD.EARTH, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK.REPLACE_TWO_ZERO_WITH_ONE_ICE_AND_ONE_AIR
      .name:
      return R.pipe(
        getRemoveCards(
          CombatModifierService.CARD.ZERO.name,
          ele.activeCount * 2,
          acc,
        ),
        getAddCards(CombatModifierService.CARD.ICE, ele.activeCount),
        getAddCards(CombatModifierService.CARD.AIR, ele.activeCount),
      )(acc);

    case CombatModifierService.PERK.ADD_TWO_PLUS_ONE_PUSH_ONE.name:
      return getAddCards(
        CombatModifierService.CARD.PLUS_ONE_PUSH_ONE,
        ele.activeCount * 2,
      )(acc);

    default:
      return acc;
  }
};

export default getCardsByPerk;
