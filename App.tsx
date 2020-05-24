import {Navigation} from '@navigations';
import {useRemoteConfig} from '@remote-config';
import {persisted} from '@store';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const DEFAULTS = {
  AnalyticsConsentScreen_Content:
    'We would like to check if you are comfortable with the way this app collects and uses your information.\nIf you choose to opt in, this app will anonymously collect and track the usage and behavior of its features.\nThis allows us to understand the user behavior and experience of these feature, enabling us to develop and improve your experience with this app.',
};
const App = () => {
  const {data: remoteConfigData} = useRemoteConfig(false, DEFAULTS);

  const loading = remoteConfigData.loading;

  return (
    <StoreProvider store={persisted.store}>
      <PersistGate loading={null} persistor={persisted.persistor}>
        <PaperProvider>{loading ? null : <Navigation />}</PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
