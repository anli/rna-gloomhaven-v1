import {createSlice} from '@reduxjs/toolkit';
import {State} from './type';

/* istanbul ignore next */
const slice = createSlice({
  name: 'combatModifier',
  initialState: {
    cards: [],
    perkSelection: {},
    characterSelection: 'Spellweaver',
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
  },
});

export default slice;
