import {State} from './type';

export default class AnalyticsSelectors {
  static hasUserConsent = (state: State) => state.hasUserConsent;
}
