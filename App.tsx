import {useAdmob} from '@admob';
import {Navigation} from '@navigations';
import {useRemoteConfig} from '@remote-config';
import {persisted, State} from '@store';
import {UserSelectors} from '@user';
import React from 'react';
import 'react-native-gesture-handler';
import {
  DarkTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {Provider as StoreProvider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const DEFAULTS = {
  AnalyticsConsentScreen_Content:
    'We would like to check if you are comfortable with the way this app collects and uses your information.\nIf you choose to opt in, this app will anonymously collect and track the usage and behavior of its features.\nThis allows us to understand the user behavior and experience of these feature, enabling us to develop and improve your experience with this app.',
};

const App = () => {
  const {actions: admobActions} = useAdmob();

  const onAdmobInit = async () => {
    try {
      await admobActions.init$();
    } catch (error) {}
  };

  onAdmobInit();

  return (
    <StoreProvider store={persisted.store}>
      <PersistGate loading={null} persistor={persisted.persistor}>
        <ThemeApp />
      </PersistGate>
    </StoreProvider>
  );
};

const ThemeApp = () => {
  const {data: remoteConfigData} = useRemoteConfig(false, DEFAULTS);
  const state = useSelector<State, State>(res => res);
  const isDarkMode = UserSelectors.isDarkMode(state.user);
  const loading = remoteConfigData.loading;

  return (
    <PaperProvider theme={getTheme(isDarkMode)}>
      {loading ? null : (
        <>
          <Navigation />
        </>
      )}
    </PaperProvider>
  );
};

export default App;

const getTheme = (isDarkMode?: boolean) => {
  if (isDarkMode) {
    return DarkTheme;
  }

  return DefaultTheme;
};
