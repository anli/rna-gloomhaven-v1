import {CombatModifierService, combatModifierSlice} from '@combat-modifier';
import {useNavigation} from '@react-navigation/native';
import R from 'ramda';
import {useDispatch} from 'react-redux';

const useCharacterSelection = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = {
    characters: R.map(({name}: {name: string}) => name)(
      R.values(CombatModifierService.CHARACTER),
    ),
  };

  const onSelect = (id: string) => {
    dispatch(combatModifierSlice.actions.setCharacterSelection(id));
    navigation.goBack();
  };

  return {data, onSelect};
};

export default useCharacterSelection;
