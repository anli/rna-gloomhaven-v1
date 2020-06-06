import {AnalyticsSelectors} from '@analytics';
import {useNavigation} from '@react-navigation/native';
import {State} from '@store';
import {UserSelectors, userSlice} from '@user';
import {useDispatch, useSelector} from 'react-redux';

const useSetting = () => {
  /* istanbul ignore next */
  const state = useSelector<State, State>(res => res);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const data = {
    userConsent: AnalyticsSelectors.hasUserConsent(state.analytics)
      ? "You're sharing your app usage anonymously"
      : 'No longer sharing any app usage',
    isDarkMode: UserSelectors.isDarkMode(state.user),
  };

  const actions = {
    onUserConsent: () => navigation.navigate('AnalyticsConsentScreen'),
    onToggleDarkMode: () =>
      dispatch(userSlice.actions.setIsDarkMode(!data.isDarkMode)),
  };

  return {data, actions};
};

export default useSetting;
