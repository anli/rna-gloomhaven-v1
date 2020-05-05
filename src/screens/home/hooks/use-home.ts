import {Data} from '@services';
import {shuffle} from '@utils';
import R from 'ramda';
import {useEffect, useState} from 'react';

interface Card {
  name: string;
  imageUrl: string;
}

const getBlessCards = R.filter(R.propEq('name', 'bless'));
const getCurseCards = R.filter(R.propEq('name', 'curse'));
const getWithoutBlessCurse = R.without([Data.CARD.BLESS, Data.CARD.CURSE]);

const useHome = () => {
  const [discardCards, setDiscardCards] = useState<Card[]>([]);
  const [drawCards, setDrawCards] = useState<Card[]>([]);
  const {cards, character} = Data.get();

  const blessCount = getBlessCards(drawCards).length;
  const curseCount = getCurseCards(drawCards).length;

  useEffect(() => {
    Data.preloadImages();
  }, []);

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

  const onAddBless = () => {
    setDrawCards(shuffle([Data.CARD.BLESS, ...drawCards]));
  };

  const onRemoveBless = () => {
    const index = R.findIndex(R.propEq('name', 'bless'))(drawCards);
    if (index >= 0) {
      setDrawCards(R.remove<Card>(index, 1)(drawCards));
    }
  };

  const onAddCurse = () => {
    setDrawCards(shuffle([Data.CARD.CURSE, ...drawCards]));
  };

  const onRemoveCurse = () => {
    const index = R.findIndex(R.propEq('name', 'curse'))(drawCards);
    if (index >= 0) {
      setDrawCards(R.remove<Card>(index, 1)(drawCards));
    }
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
