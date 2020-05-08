import CombatModifierService from '../service';
import {State} from './type';

interface RootState {
  combatModifier: State;
}

export default class {
  static cards = (state: RootState) => state.combatModifier.cards;
  static perkSelection = (state: RootState) =>
    state.combatModifier.perkSelection;
  static characterSelection = (state: RootState) =>
    state.combatModifier.characterSelection;
  static characterSelectionPerks = (state: RootState) => {
    const character = state.combatModifier.characterSelection;
    return CombatModifierService.CHARACTER[character].perks;
  };
}
