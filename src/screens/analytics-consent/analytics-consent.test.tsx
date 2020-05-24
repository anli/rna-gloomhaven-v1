import {loadFeatureOptions, render} from '@test';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';
import React from 'react';
import 'react-native';
import {fireEvent, RenderAPI} from 'react-native-testing-library';
import * as redux from 'react-redux';
import AnalyticsConsentScreen from './analytics-consent';

const feature = loadFeature('./analytics-consent.feature', loadFeatureOptions);

defineFeature(feature, test => {
  let component: RenderAPI;
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.restoreAllMocks();
    jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);
  });

  const iShouldSeeText = (step: DefineStepFunction) => {
    step(/^I should see "(.*) Text"$/, (text: string) => {
      expect(component.getByText(text)).toBeDefined();
    });
  };

  test('Data is loaded', ({given, when, then}) => {
    given('data is "loaded"', () => {});

    when('I am at "Analytics Consent Screen"', () => {
      component = render(<AnalyticsConsentScreen.Component />);
    });

    iShouldSeeText(then);
    iShouldSeeText(then);
    iShouldSeeText(then);
  });

  test('User Accept', ({given, when, then}) => {
    given('I am at "Analytics Consent Screen"', () => {
      component = render(<AnalyticsConsentScreen.Component />);
    });

    when('I press "Yes, I would love to help out"', () => {
      fireEvent.press(
        component.getByTestId('AnalyticsConsentScreen.AgreeButton'),
      );
    });

    then('I accept consent', () => {
      expect(mockDispatch).toBeCalledWith({
        payload: true,
        type: 'analytics/setHasUserConsent',
      });
      mockDispatch.mockClear();
    });
  });

  test('User Decline', ({given, when, then}) => {
    given('I am at "Analytics Consent Screen"', () => {
      component = render(<AnalyticsConsentScreen.Component />);
    });

    when('I press "No, I would like to opt out"', () => {
      fireEvent.press(
        component.getByTestId('AnalyticsConsentScreen.DisagreeButton'),
      );
    });

    then('I decline consent', () => {
      expect(mockDispatch).toBeCalledWith({
        payload: false,
        type: 'analytics/setHasUserConsent',
      });
      mockDispatch.mockClear();
    });
  });
});
