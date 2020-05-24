import {mockNavigate} from '@mocks';
import {loadFeatureOptions, render} from '@test';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';
import React from 'react';
import 'react-native';
import {fireEvent, RenderAPI} from 'react-native-testing-library';
import * as redux from 'react-redux';
import SettingScreen from './setting';

const feature = loadFeature('./setting.feature', loadFeatureOptions);

defineFeature(feature, test => {
  let component: RenderAPI;

  beforeEach(() => {
    jest.restoreAllMocks();
    mockNavigate.mockReset();
  });

  const iShouldSeeText = (step: DefineStepFunction) => {
    step(/^I should see "(.*) Text"$/, (text: string) => {
      expect(component.getByText(text)).toBeDefined();
    });
  };

  test('User Accepted', ({given, when, then}) => {
    given('data is "User Accepted"', () => {
      jest.spyOn(redux, 'useSelector').mockReturnValue({
        analytics: {hasUserConsent: true},
      });
    });

    when('I am at "Setting Screen"', () => {
      component = render(<SettingScreen.Component />);
    });

    iShouldSeeText(then);
  });

  test('User Declined', ({given, when, then}) => {
    given('data is "User Declined"', () => {
      jest.spyOn(redux, 'useSelector').mockReturnValue({
        analytics: {hasUserConsent: false},
      });
    });

    when('I am at "Setting Screen"', () => {
      component = render(<SettingScreen.Component />);
    });

    iShouldSeeText(then);
  });

  test('User Change Privacy Option', ({given, when, then}) => {
    given('data is "User Declined"', () => {
      jest.spyOn(redux, 'useSelector').mockReturnValue({
        analytics: {hasUserConsent: false},
      });
    });

    when('I am at "Setting Screen"', () => {
      component = render(<SettingScreen.Component />);
    });

    when('I press "Privacy Option"', () => {
      fireEvent.press(component.getByTestId('SettingScreen.UserConsentButton'));
    });

    then('I should see "Analytics Consent Screen"', () => {
      expect(mockNavigate).toBeCalledTimes(1);
      expect(mockNavigate).toBeCalledWith('AnalyticsConsentScreen');
    });
  });
});
