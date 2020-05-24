import {AnalyticsSelectors} from '@analytics';
import {useNavigation} from '@react-navigation/native';
import {State} from '@store';
import {useSelector} from 'react-redux';

const useSetting = () => {
  const state = useSelector<State, State>(res => res);
  const navigation = useNavigation();

  const data = {
    userConsent: AnalyticsSelectors.hasUserConsent(state.analytics)
      ? "You're sharing your app usage anonymously"
      : 'No longer sharing any app usage',
  };

  const actions = {
    onUserConsent: () => navigation.navigate('AnalyticsConsentScreen'),
  };

  return {data, actions};
};

export default useSetting;
