import {PerkUpdateScreen} from '@screens';
import {loadFeatureOptions, render} from '@test';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';
import React from 'react';
import 'react-native';
import {RenderAPI} from 'react-native-testing-library';

const feature = loadFeature('./perk-update.feature', loadFeatureOptions);

defineFeature(feature, test => {
  let component: RenderAPI;

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  const iShouldSeeText = (step: DefineStepFunction) => {
    step(/^I should see "(.*)"$/, (text: string) => {
      expect(component.getByText(text)).toBeDefined();
    });
  };

  test('Data is loaded', ({given, when, then}) => {
    given('data is "Spellweaver"', () => {});

    when('I am at "Perk Update Screen"', () => {
      component = render(<PerkUpdateScreen.Component />);
    });

    iShouldSeeText(then);
    iShouldSeeText(then);
    iShouldSeeText(then);
    iShouldSeeText(then);
    iShouldSeeText(then);

    iShouldSeeText(then);
    iShouldSeeText(then);
    iShouldSeeText(then);
    iShouldSeeText(then);
    iShouldSeeText(then);
  });
});
