import React from 'react';
import {StatusBar} from 'react-native';
import {List} from 'react-native-paper';
import styled from 'styled-components/native';
import useSetting from './hooks';

const SettingScreenComponent = () => {
  const {data, actions} = useSetting();

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <Screen testID="SettingScreen">
        <Body>
          <List.Item
            testID="SettingScreen.UserConsentButton"
            title={data?.userConsent}
            description="Privacy options"
            onPress={actions?.onUserConsent}
            right={props => <List.Icon {...props} icon="chevron-right" />}
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

const Screen = styled.SafeAreaView`
  background-color: white;
  flex: 1;
`;

const Body = styled.View`
  flex: 1;
`;
