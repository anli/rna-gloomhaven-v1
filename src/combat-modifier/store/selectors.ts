import {State} from './type';

interface RootState {
  combatModifier: State;
}

export default class {
  static cards = (state: RootState) => state.combatModifier.cards;
  static perkSelection = (state: RootState) =>
    state.combatModifier.perkSelection;
}
