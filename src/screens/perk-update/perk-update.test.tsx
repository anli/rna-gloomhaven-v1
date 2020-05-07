import {PerkUpdateScreen} from '@screens';
import {loadFeatureOptions, render} from '@test';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';
import React from 'react';
import 'react-native';
import {fireEvent, RenderAPI} from 'react-native-testing-library';
import * as redux from 'react-redux';

const feature = loadFeature('./perk-update.feature', loadFeatureOptions);

defineFeature(feature, test => {
  let component: RenderAPI;
  const mockDispatch = jest.fn();
  jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);

  beforeEach(() => {});

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

    iShouldSeeText(then);
  });

  test('Select Spellweaver Perk', ({given, when, then}) => {
    given('data is "Spellweaver"', () => {});

    when('I am at "Perk Update Screen"', () => {
      component = render(<PerkUpdateScreen.Component />);
    });

    when(/^I press "(.*)"$/, (perk: string) => {
      fireEvent.press(component.getByText(perk));
    });

    when('I press "Confirm Button"', () => {
      fireEvent.press(component.getByTestId('PerkUpdateScreen.ConfirmButton'));
    });

    then(/^I should see "Draw Deck Count (.*)"$/, (count: string) => {
      expect(mockDispatch.mock.calls[0][0].payload).toHaveLength(Number(count));
      mockDispatch.mockReset();
    });
  });

  test('Cancel perk selection', ({given, when, then}) => {
    given('data is "Spellweaver"', () => {});

    when('I am at "Perk Update Screen"', () => {
      component = render(<PerkUpdateScreen.Component />);
    });

    when(/^I press "(.*)"$/, (perk: string) => {
      fireEvent.press(component.getByText(perk));
    });

    when(/^I press "(.*)"$/, (perk: string) => {
      fireEvent.press(component.getByText(perk));
    });

    when('I press "Confirm Button"', () => {
      fireEvent.press(component.getByTestId('PerkUpdateScreen.ConfirmButton'));
    });

    then(/^I should see "Draw Deck Count (.*)"$/, (count: string) => {
      expect(mockDispatch.mock.calls[0][0].payload).toHaveLength(Number(count));
      mockDispatch.mockReset();
    });
  });
});
