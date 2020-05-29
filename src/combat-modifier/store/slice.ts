import {createSlice} from '@reduxjs/toolkit';
import {shuffle} from '@utils';
import CombatModifierService from './../service';
import {State} from './type';

/* istanbul ignore next */
const getSlice = (name: string = 'combatModifier') =>
  createSlice({
    name,
    initialState: {
      cards: CombatModifierService.BASE_CARDS,
      perkSelection: {},
      characterSelection: 'Spellweaver',
      drawCards: shuffle(CombatModifierService.BASE_CARDS),
      discardCards: [],
      minusOneCards: [],
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
      setMinusOneCards: (state: State, action: any) => {
        state.minusOneCards = action.payload;
      },
    },
  });

const slices = {
  combatModifier: getSlice(),
  combatModifier2: getSlice('combatModifier2'),
  combatModifier3: getSlice('combatModifier3'),
  combatModifier4: getSlice('combatModifier4'),
};

export default slices;
