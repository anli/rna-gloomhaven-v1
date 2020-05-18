import {
  Card,
  combatModifierSelectors,
  CombatModifierService,
} from '@combat-modifier';
import {useNavigation} from '@react-navigation/native';
import {State} from '@store';
import R from 'ramda';
import {useSelector} from 'react-redux';
import useBless from './use-bless';
import useCurse from './use-curse';
import useDrawDiscard from './use-draw-discard';
import useEquipment from './use-equipment';

const useHome = () => {
  const state = useSelector<State, State>(res => res);
  const drawCards = combatModifierSelectors.drawCards(state);
  const discardCards = combatModifierSelectors.discardCards(state);
  const {onDraw, onShuffle} = useDrawDiscard();
  const {blessCount, onAddBless, onRemoveBless} = useBless();
  const {curseCount, onAddCurse, onRemoveCurse} = useCurse();
  const navigation = useNavigation();
  CombatModifierService.usePreloadImages();
  const {equipmentCount, onAddEquipment, onRemoveEquipment} = useEquipment();

  const character = combatModifierSelectors.characterSelection(state);

  const onUpdatePerk = () => navigation.navigate('PerkUpdateScreen');

  const onCharacterSelection = () =>
    navigation.navigate('CharacterSelectionScreen');

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
  };
};

export default useHome;
