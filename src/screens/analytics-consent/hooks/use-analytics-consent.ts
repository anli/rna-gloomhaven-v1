import {analyticsSlice} from '@analytics';
import {RemoteConfigService} from '@remote-config';
import {useDispatch} from 'react-redux';

const useAnalyticsConsent = () => {
  const dispatch = useDispatch();
  const content =
    RemoteConfigService.value<string>('AnalyticsConsentScreen_Content')?.split(
      '\\n',
    ) || [];

  const data = {
    content,
  };

  const actions = {
    onAccept: () => dispatch(analyticsSlice.actions.setHasUserConsent(true)),
    onReject: () => dispatch(analyticsSlice.actions.setHasUserConsent(false)),
  };

  return {data, actions};
};

export default useAnalyticsConsent;
