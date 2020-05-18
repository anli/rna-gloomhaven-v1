import {CombatModifierService, combatModifierSlice} from '@combat-modifier';
import {useNavigation} from '@react-navigation/native';
import {shuffle} from '@utils';
import R from 'ramda';
import {useDispatch} from 'react-redux';

const useCharacterSelection = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = {
    characters: R.map(
      ({name, code = undefined}: {name: string; code?: string}) => ({
        id: name,
        name: code || name,
      }),
    )(R.values(CombatModifierService.CHARACTER)),
  };

  const onSelect = (id: string) => {
    const cards = CombatModifierService.BASE_CARDS;
    dispatch(combatModifierSlice.actions.setCharacterSelection(id));
    dispatch(combatModifierSlice.actions.setDrawCards(shuffle(cards)));
    dispatch(combatModifierSlice.actions.setDiscardCards([]));
    dispatch(combatModifierSlice.actions.setPerkSelection({}));

    navigation.goBack();
  };

  return {data, onSelect};
};

export default useCharacterSelection;
