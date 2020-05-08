import {
  Card,
  combatModifierSelectors,
  CombatModifierService,
  combatModifierSlice,
} from '@combat-modifier';
import {useNavigation} from '@react-navigation/native';
import {State} from '@store';
import {shuffle} from '@utils';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import useBless from './use-bless';
import useCurse from './use-curse';
import useDrawDiscard from './use-draw-discard';

const useHome = () => {
  const dispatch = useDispatch();
  const state = useSelector<State, State>(res => res);
  const [discardCards, setDiscardCards] = useState<Card[]>([]);
  const [drawCards, setDrawCards] = useState<Card[]>([]);
  const {blessCount, onAddBless, onRemoveBless} = useBless(
    drawCards,
    setDrawCards,
  );
  const {curseCount, onAddCurse, onRemoveCurse} = useCurse(
    drawCards,
    setDrawCards,
  );
  const {onDraw, onShuffle} = useDrawDiscard(
    drawCards,
    setDrawCards,
    discardCards,
    setDiscardCards,
  );
  const navigation = useNavigation();
  CombatModifierService.usePreloadImages();

  const character = combatModifierSelectors.characterSelection(state);
  const cards = combatModifierSelectors.cards(state);

  useEffect(() => {
    dispatch(
      combatModifierSlice.actions.setCards(
        shuffle(CombatModifierService.BASE_CARDS),
      ),
    );
  }, [character, dispatch]);

  useEffect(() => {
    setDiscardCards([]);
    setDrawCards(cards);
  }, [cards]);

  const onUpdatePerk = () => navigation.navigate('PerkUpdateScreen');

  const onCharacterSelection = () =>
    navigation.navigate('CharacterSelectionScreen');

  return {
    data: {character, drawCards, discardCards, blessCount, curseCount},
    onDraw,
    onShuffle,
    onAddBless,
    onRemoveBless,
    onAddCurse,
    onRemoveCurse,
    onUpdatePerk,
    onCharacterSelection,
  };
};

export default useHome;
