import CombatModifierService from '../service';
import {State} from './type';

export default class {
  static perkSelection = (state: State) => state.perkSelection;
  static characterSelection = (state: State) => state?.characterSelection;
  static characterSelectionPerks = (state: State) => {
    const character = state?.characterSelection;
    return CombatModifierService.CHARACTER[character]?.perks;
  };
  static drawCards = (state: State) => state?.drawCards || [];
  static discardCards = (state: State) => state?.discardCards || [];
}
