import {Data} from '@services';
import {shuffle} from '@utils';
import {useEffect, useState} from 'react';

interface Card {
  name: string;
  imageUrl: string;
}

const useHome = () => {
  const [discardCards, setDiscardCards] = useState<Card[]>([]);
  const [drawCards, setDrawCards] = useState<Card[]>([]);
  const {cards, character} = Data.get();

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
      shuffle<Card>([...discardCards, ...drawCards]),
    );
    setDiscardCards([]);
  };

  const data = {character, drawCards, discardCards};

  return {data, onDraw, onShuffle};
};

export default useHome;
