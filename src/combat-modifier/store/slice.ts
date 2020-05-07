import {createSlice} from '@reduxjs/toolkit';
import {State} from './type';

/* istanbul ignore next */
const slice = createSlice({
  name: 'combatModifier',
  initialState: {cards: [], perkSelection: {}},
  reducers: {
    setCards: (state: State, action: any) => {
      state.cards = action.payload;
    },
    setPerkSelection: (state: State, action: any) => {
      state.perkSelection = action.payload;
    },
  },
});

export default slice;
