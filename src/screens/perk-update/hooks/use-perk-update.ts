import {
  Card,
  CharacterPerk,
  combatModifierSelectors,
  CombatModifierService,
  combatModifierSlices,
  getCardsByPerk,
  Perk,
  PerkSelection,
  SliceProps,
  State,
} from '@combat-modifier';
import {useNavigation, useRoute} from '@react-navigation/native';
import {State as RootState} from '@store';
import {shuffle} from '@utils';
import R from 'ramda';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const usePerkUpdate = () => {
  const {params} = useRoute<any>();
  const {slice}: {slice: SliceProps} = params;
  const dispatch = useDispatch();
  const state = useSelector<RootState, State>(res => res[slice]);
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

    dispatch(combatModifierSlices[slice].actions.setCards(perkCards));

    dispatch(
      combatModifierSlices[slice].actions.setDrawCards(shuffle(perkCards)),
    );

    dispatch(combatModifierSlices[slice].actions.setDiscardCards([]));

    dispatch(
      combatModifierSlices[slice].actions.setPerkSelection(
        getPerkSelection(perks),
      ),
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
