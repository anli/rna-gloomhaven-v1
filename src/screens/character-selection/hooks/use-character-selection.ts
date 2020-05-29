import {analytics} from '@analytics';
import {
  CombatModifierService,
  combatModifierSlices,
  SliceProps,
} from '@combat-modifier';
import {useNavigation, useRoute} from '@react-navigation/native';
import {shuffle} from '@utils';
import R from 'ramda';
import {useDispatch} from 'react-redux';

const useCharacterSelection = () => {
  const {params} = useRoute<any>();
  const {slice}: {slice: SliceProps} = params;
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
    analytics().logSelectContent({content_type: 'Character', item_id: id});
    const cards = CombatModifierService.BASE_CARDS;
    dispatch(combatModifierSlices[slice].actions.setCharacterSelection(id));
    dispatch(combatModifierSlices[slice].actions.setDrawCards(shuffle(cards)));
    dispatch(combatModifierSlices[slice].actions.setDiscardCards([]));
    dispatch(combatModifierSlices[slice].actions.setMinusOneCards([]));
    dispatch(combatModifierSlices[slice].actions.setPerkSelection({}));

    navigation.goBack();
  };

  return {data, onSelect};
};

export default useCharacterSelection;
