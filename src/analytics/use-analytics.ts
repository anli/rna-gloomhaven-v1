import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import firebaseAnalytics from './analytics';
import AnalyticsSelectors from './selectors';
import {RootState, State} from './type';

/* istanbul ignore next */
const useAnalytics = () => {
  const state = useSelector<RootState, State>(res => res.analytics);
  const data = {
    hasUserConsent: AnalyticsSelectors.hasUserConsent(state),
  };

  useEffect(() => {
    const setAnalyticsCollectionEnabled$ = async (value: boolean) => {
      await firebaseAnalytics().setAnalyticsCollectionEnabled(value);
    };

    setAnalyticsCollectionEnabled$(data.hasUserConsent || false);
  }, [data.hasUserConsent]);
  return {data};
};

export default useAnalytics;
