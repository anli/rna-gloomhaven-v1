import admob, {MaxAdContentRating, TestIds} from '@react-native-firebase/admob';
import {ADMOB_ANDROID_APP_ID} from 'react-native-dotenv';

const useAdmob = () => {
  const data = {
    unitId: __DEV__ ? TestIds?.BANNER || '' : ADMOB_ANDROID_APP_ID,
  };

  const actions = {
    init$: async () => {
      return await admob().setRequestConfiguration({
        maxAdContentRating: MaxAdContentRating.PG,
        tagForChildDirectedTreatment: true,
        tagForUnderAgeOfConsent: true,
      });
    },
  };

  return {data, actions};
};

export default useAdmob;
