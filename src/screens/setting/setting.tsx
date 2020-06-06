import {Screen, StatusBar} from '@components';
import React from 'react';
import {List, Switch, useTheme} from 'react-native-paper';
import styled from 'styled-components/native';
import useSetting from './hooks';

const SettingScreenComponent = () => {
  const {data, actions} = useSetting();
  const theme = useTheme();

  return (
    <>
      <StatusBar theme={theme} />
      <Screen theme={theme} testID="SettingScreen">
        <Body>
          <List.Item
            testID="SettingScreen.UserConsentButton"
            title={data?.userConsent}
            description="Privacy options"
            onPress={actions?.onUserConsent}
            right={props => <List.Icon {...props} icon="chevron-right" />}
          />
          <List.Item
            title="Dark Mode"
            right={() => (
              <Switch
                testID="SettingScreen.IsDarkModeButton"
                value={data.isDarkMode}
                onValueChange={actions.onToggleDarkMode}
              />
            )}
          />
        </Body>
      </Screen>
    </>
  );
};

const SettingScreenOptions = {headerShown: true, title: 'Settings'};

export default class {
  static Component = SettingScreenComponent;
  static Options = SettingScreenOptions;
}

const Body = styled.View`
  flex: 1;
`;
