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
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.restoreAllMocks();
    mockNavigate.mockReset();
    jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);
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
        user: {isDarkMode: false},
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
        user: {isDarkMode: false},
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
        user: {isDarkMode: false},
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

  test('User Change Dark Mode', ({given, when, then}) => {
    given('data is "any"', () => {});

    when('I am at "Setting Screen"', () => {
      component = render(<SettingScreen.Component />);
    });

    when('I press "Dark Mode"', () => {
      fireEvent(
        component.getByTestId('SettingScreen.IsDarkModeButton'),
        'onValueChange',
      );
    });

    then('I should see "Dark Mode"', () => {
      expect(mockDispatch).toBeCalledWith({
        payload: true,
        type: 'user/setIsDarkMode',
      });
      mockDispatch.mockClear();
    });
  });
});
