import {Screen, StatusBar} from '@components';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {
  Button,
  Paragraph as UnstyledParagraph,
  Theme,
  Title,
  useTheme,
} from 'react-native-paper';
import styled from 'styled-components/native';
import useAnalyticsConsent from './hooks';

const BackgroundImage = require('@assets/images/vault.png');
const BackgroundColor = '#f7b85c';

const AnalyticsConsentScreenComponent = () => {
  const {data, actions} = useAnalyticsConsent();
  const theme = useTheme();

  return (
    <>
      <StatusBar theme={getTheme(theme, {background: BackgroundColor})} />
      <Screen theme={theme} testID="AnalyticsConsentScreen">
        <Body>
          <Image
            source={BackgroundImage}
            resizeMode={FastImage.resizeMode.cover}
          />
        </Body>
        <Footer>
          <Content>
            <Title>We take your privacy seriously</Title>
            {data?.content?.map((item, key) => (
              <Paragraph key={key}>{item}</Paragraph>
            ))}
          </Content>
          <Buttons>
            <DisagreeButton
              testID="AnalyticsConsentScreen.DisagreeButton"
              mode="outlined"
              uppercase={false}
              onPress={actions?.onReject}>
              No, I would like to opt out
            </DisagreeButton>
            <AgreeButton
              testID="AnalyticsConsentScreen.AgreeButton"
              mode="contained"
              uppercase={false}
              onPress={actions?.onAccept}>
              Yes, I would love to help out
            </AgreeButton>
          </Buttons>
        </Footer>
      </Screen>
    </>
  );
};

const AnalyticsConsentScreenOptions = {
  headerShown: false,
};

export default class {
  static Component = AnalyticsConsentScreenComponent;
  static Options = AnalyticsConsentScreenOptions;
}

const AgreeButton = styled(Button)``;

const DisagreeButton = styled(Button)`
  margin-bottom: 8px;
`;

const Buttons = styled.View`
  padding: 0px 32px 32px 32px;
`;

const Body = styled.View`
  flex: 1;
`;
const Footer = styled.View``;

const Content = styled.View`
  padding: 32px 32px 0px 32px;
`;

const Image = styled(FastImage)`
  height: 100%;
  width: 100%;
`;

const Paragraph = styled(UnstyledParagraph)`
  margin-bottom: 16px;
`;

const getTheme = (theme: Theme, colors: any) => {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      ...colors,
    },
  };
};
