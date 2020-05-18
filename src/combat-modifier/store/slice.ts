import {createSlice} from '@reduxjs/toolkit';
import {shuffle} from '@utils';
import CombatModifierService from './../service';
import {State} from './type';

/* istanbul ignore next */
const slice = createSlice({
  name: 'combatModifier',
  initialState: {
    cards: CombatModifierService.BASE_CARDS,
    perkSelection: {},
    characterSelection: 'Spellweaver',
    drawCards: shuffle(CombatModifierService.BASE_CARDS),
    discardCards: [],
  },
  reducers: {
    setCards: (state: State, action: any) => {
      state.cards = action.payload;
    },
    setPerkSelection: (state: State, action: any) => {
      state.perkSelection = action.payload;
    },
    setCharacterSelection: (state: State, action: any) => {
      state.characterSelection = action.payload;
    },
    setDrawCards: (state: State, action: any) => {
      state.drawCards = action.payload;
    },
    setDiscardCards: (state: State, action: any) => {
      state.discardCards = action.payload;
    },
  },
});

export default slice;
