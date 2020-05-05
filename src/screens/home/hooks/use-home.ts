import {Data} from '@services';
import {shuffle} from '@utils';
import R from 'ramda';
import {useEffect, useState} from 'react';
import useBless from './use-bless';
import useCurse from './use-curse';

interface Card {
  name: string;
  imageUrl: string;
}

const getWithoutBlessCurse = R.without([Data.CARD.BLESS, Data.CARD.CURSE]);

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
