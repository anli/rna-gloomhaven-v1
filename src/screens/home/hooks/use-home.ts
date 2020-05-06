import {useNavigation} from '@react-navigation/native';
import {Data} from '@services';
import {shuffle} from '@utils';
import {useEffect, useState} from 'react';
import useBless from './use-bless';
import useCurse from './use-curse';
import useDrawDiscard from './use-draw-discard';

interface Card {
  name: string;
  imageUrl: string;
}

const useHome = () => {
  const [discardCards, setDiscardCards] = useState<Card[]>([]);
  const [drawCards, setDrawCards] = useState<Card[]>([]);
  const {blessCount, onAddBless, onRemoveBless} = useBless(drawCards, setDrawCards);
  const {curseCount, onAddCurse, onRemoveCurse} = useCurse(drawCards, setDrawCards);
  const {onDraw, onShuffle} = useDrawDiscard(
    drawCards,
    setDrawCards,
    discardCards,
    setDiscardCards,
  );
  const navigation = useNavigation();
  const {cards, character} = Data.get();
  Data.usePreloadImages();

  const onUpdatePerk = () => navigation.navigate('PerkUpdateScreen');

  useEffect(() => {
    setDrawCards(shuffle(cards));
  }, [cards]);

  return {
    data: {character, drawCards, discardCards, blessCount, curseCount},
    onDraw,
    onShuffle,
    onAddBless,
    onRemoveBless,
    onAddCurse,
    onRemoveCurse,
    onUpdatePerk,
  };
};

export default useHome;
