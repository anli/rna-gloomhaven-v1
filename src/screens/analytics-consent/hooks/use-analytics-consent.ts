import {analyticsSlice} from '@analytics';
import {useNavigation} from '@react-navigation/native';
import {RemoteConfigService} from '@remote-config';
import {useDispatch} from 'react-redux';

const useAnalyticsConsent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const content =
    RemoteConfigService.value<string>('AnalyticsConsentScreen_Content')?.split(
      '\\n',
    ) || [];

  const data = {
    content,
  };

  const goBack = () => {
    navigation.canGoBack() && navigation.goBack();
  };

  const actions = {
    onAccept: () => {
      dispatch(analyticsSlice.actions.setHasUserConsent(true));
      goBack();
    },
    onReject: () => {
      dispatch(analyticsSlice.actions.setHasUserConsent(false));
      goBack();
    },
  };

  return {data, actions};
};

export default useAnalyticsConsent;
