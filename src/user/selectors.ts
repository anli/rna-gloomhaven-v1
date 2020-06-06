import {State} from './type';

export default class UserSelectors {
  static isDarkMode = (state: State) => state.isDarkMode;
  /* istanbul ignore next */
  static userId = (state: State) => state.userId;
}
