import {
  Card,
  CharacterPerk,
  combatModifierSelectors,
  CombatModifierService,
  combatModifierSlice,
  getCardsByPerk,
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
  const characterPerks = combatModifierSelectors.characterSelectionPerks(state);

  const data = {perks};

  useEffect(() => {
    setPerks(getPerks(perkSelection)(characterPerks));
  }, [perkSelection, characterPerks]);

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

const select = (perk: Perk) => {
  if (perk.totalCount > perk.activeCount) {
    return {...perk, activeCount: perk.activeCount + 1};
  }

  return {...perk, activeCount: 0};
};

const getPerks = (perkSelection: PerkSelection) => {
  return R.map<CharacterPerk, Perk>(n => {
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
