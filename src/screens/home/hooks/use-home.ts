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
  const {cards, character} = Data.get();
  Data.usePreloadImages();

  useEffect(() => {
    setDrawCards(shuffle(cards));
  }, [cards]);

  const data = {character, drawCards, discardCards, blessCount, curseCount};

  return {
    data,
    onDraw,
    onShuffle,
    onAddBless,
    onRemoveBless,
    onAddCurse,
    onRemoveCurse,
  };
};

export default useHome;
