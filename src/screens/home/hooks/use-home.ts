import {
  Card,
  combatModifierSelectors,
  CombatModifierService,
  State,
} from '@combat-modifier';
import {useNavigation, useRoute} from '@react-navigation/native';
import {State as RootState} from '@store';
import R from 'ramda';
import {useSelector} from 'react-redux';
import {SliceProps} from 'src/combat-modifier/store/type';
import useBless from './use-bless';
import useCurse from './use-curse';
import useDrawDiscard from './use-draw-discard';
import useEquipment from './use-equipment';
import useMinusOne from './use-minus-one';

const useHome = () => {
  const {params} = useRoute<any>();
  const {slice}: {slice: SliceProps} = params;
  const state = useSelector<RootState, State>(res => res[slice]);
  const drawCards = combatModifierSelectors.drawCards(state);
  const discardCards = combatModifierSelectors.discardCards(state);
  const {onDraw, onShuffle, onTop, onBottom} = useDrawDiscard(slice);
  const {blessCount, onAddBless, onRemoveBless} = useBless(slice);
  const {curseCount, onAddCurse, onRemoveCurse} = useCurse(slice);
  const navigation = useNavigation();
  CombatModifierService.usePreloadImages();
  const {equipmentCount, onAddEquipment, onRemoveEquipment} = useEquipment(
    slice,
  );
  const {minusOneCount, onAddMinusOne, onRemoveMinusOne} = useMinusOne(slice);

  const character = combatModifierSelectors.characterSelection(state);

  const onUpdatePerk = () => navigation.navigate('PerkUpdateScreen', {slice});

  const onCharacterSelection = () =>
    navigation.navigate('CharacterSelectionScreen', {slice});

  const isShuffle =
    R.findIndex<Card>(n => n.isShuffle || false)(discardCards) !== -1;

  return {
    data: {
      character,
      drawCards,
      discardCards,
      blessCount,
      curseCount,
      equipmentCount,
      isShuffle,
      minusOneCount,
    },
    onDraw,
    onShuffle,
    onAddBless,
    onRemoveBless,
    onAddCurse,
    onRemoveCurse,
    onUpdatePerk,
    onCharacterSelection,
    onAddEquipment,
    onRemoveEquipment,
    onTop,
    onBottom,
    onRemoveMinusOne,
    onAddMinusOne,
  };
};

export default useHome;
