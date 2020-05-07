import {createSlice} from '@reduxjs/toolkit';
import {State} from './type';

const slice = createSlice({
  name: 'combatModifier',
  initialState: {cards: []},
  reducers: {
    setCards: (state: State, action: any) => {
      state.cards = action.payload;
    },
  },
});

export default slice;
