import {Data} from '@services';
import {shuffle} from '@utils';
import {useEffect, useState} from 'react';
import useBlessCurse from './use-bless-curse';

interface Card {
  name: string;
  imageUrl: string;
}

const useHome = () => {
  const [discardCards, setDiscardCards] = useState<Card[]>([]);
  const [drawCards, setDrawCards] = useState<Card[]>([]);
  const {
    blessCount,
    onAddBless,
    onRemoveBless,
    curseCount,
    onAddCurse,
    onRemoveCurse,
    getWithoutBlessCurse,
  } = useBlessCurse(drawCards, setDrawCards);
  const {cards, character} = Data.get();
  Data.usePreloadImages();

  useEffect(() => {
    setDrawCards(shuffle(cards));
  }, [cards]);

  const onDraw = () => {
    if (drawCards.length > 0) {
      const [drawnCard, ...updatedDrawCards] = drawCards;
      setDrawCards(updatedDrawCards);
      setDiscardCards([drawnCard, ...discardCards]);
    }
  };

  const onShuffle = () => {
    setDrawCards(
      shuffle([...getWithoutBlessCurse(discardCards), ...drawCards]),
    );
    setDiscardCards([]);
  };

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
