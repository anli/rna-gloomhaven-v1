import {
  Card,
  combatModifierSelectors,
  CombatModifierService,
  combatModifierSlice,
  Perk,
  PerkSelection,
} from '@combat-modifier';
import {useNavigation} from '@react-navigation/native';
import {State} from '@store';
import {shuffle} from '@utils';
import R from 'ramda';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const usePerkUpdate = () => {
  const dispatch = useDispatch();
  const state = useSelector<State, State>(res => res);
  const navigation = useNavigation();

  const [perks, setPerks] = useState<Perk[]>([]);

  const cards = CombatModifierService.BASE_CARDS;
  const perkSelection = combatModifierSelectors.perkSelection(state);

  const data = {perks};

  useEffect(() => {
    setPerks(
      getPerks(perkSelection)(
        CombatModifierService.CHARACTER.SPELLWEAVER.perks,
      ),
    );
  }, [perkSelection]);

  const onSelect = (id: string) => {
    setPerks(
      R.adjust<Perk>(R.findIndex(R.propEq('name', id))(perks), select)(perks),
    );
  };

  const onSubmit = () => {
    const selectedPerks = R.filter<Perk>(n => n.activeCount > 0)(perks);

    const sortedCards = R.sortBy(R.prop('name'))(cards);

    const perkCards = R.reduce<Perk, Card[]>(
      getCardsByPerk,
      sortedCards,
    )(selectedPerks);

    dispatch(combatModifierSlice.actions.setCards(shuffle(perkCards)));

    dispatch(
      combatModifierSlice.actions.setPerkSelection(getPerkSelection(perks)),
    );
    navigation.goBack();
  };

  return {data, onSelect, onSubmit};
};

export default usePerkUpdate;

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

    /* istanbul ignore next */
    default:
      return acc;
  }
};

const getRemoveCards = (name: string, count: number, cards: Card[]) => {
  const index = R.findIndex(R.propEq('name', name))(cards);
  return R.remove<Card>(index, count);
};

const getAddCards = (card: Card, count: number) => {
  const cards = R.repeat(card, count);
  return R.concat(cards);
};

const select = (perk: Perk) => {
  if (perk.totalCount > perk.activeCount) {
    return {...perk, activeCount: perk.activeCount + 1};
  }

  return {...perk, activeCount: 0};
};

const getPerks = (perkSelection: PerkSelection) => {
  return R.map<Perk, Perk>(n => {
    const activeCount = perkSelection[n.name] || 0;
    return {
      ...n,
      activeCount,
    };
  });
};

const getPerkSelection = (perks: Perk[]) => {
  const activeSelection = R.filter<Perk>(n => n.activeCount > 0)(perks);

  return R.reduce<Perk, {[name: string]: number}>(
    (acc, ele) => ({...acc, [ele.name]: ele.activeCount}),
    {},
  )(activeSelection);
};
