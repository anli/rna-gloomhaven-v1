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

  beforeEach(() => {
    jest.restoreAllMocks();
    jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);
  });

  const iShouldSeeText = (step: DefineStepFunction) => {
    step(/^I should see "(.*)"$/, (text: string) => {
      expect(component.getByText(text)).toBeDefined();
    });
  };

  const iShouldSeeDrawDeckCount = (step: DefineStepFunction) => {
    step(/^I should see "Draw Deck Count (.*)"$/, (count: string) => {
      expect(mockDispatch.mock.calls[0][0].payload).toHaveLength(Number(count));
      mockDispatch.mockReset();
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

    iShouldSeeDrawDeckCount(then);
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

    iShouldSeeDrawDeckCount(then);
  });

  test('Perk is previously selected', ({given, when, then}) => {
    given('data is "Spellweaver"', () => {});

    given('data is "Remove four +0 cards"', () => {
      jest.spyOn(redux, 'useSelector').mockReturnValue({
        combatModifier: {
          cards: [],
          perkSelection: {'Remove four +0 cards': 1},
          characterSelection: 'Spellweaver',
        },
      });
    });

    when('I am at "Perk Update Screen"', () => {
      component = render(<PerkUpdateScreen.Component />);
    });

    when(/^I press "(.*)"$/, (perk: string) => {
      fireEvent.press(component.getByText(perk));
    });

    when('I press "Confirm Button"', () => {
      fireEvent.press(component.getByTestId('PerkUpdateScreen.ConfirmButton'));
    });

    iShouldSeeDrawDeckCount(then);
  });

  test('Select Cragheart Perk', ({given, when, then}) => {
    given('data is "Cragheart"', () => {
      jest.spyOn(redux, 'useSelector').mockReturnValue({
        combatModifier: {
          cards: [],
          perkSelection: {},
          characterSelection: 'Cragheart',
        },
      });
    });

    when('I am at "Perk Update Screen"', () => {
      component = render(<PerkUpdateScreen.Component />);
    });

    when(/^I press "(.*)"$/, (perk: string) => {
      fireEvent.press(component.getByText(perk));
    });

    when('I press "Confirm Button"', () => {
      fireEvent.press(component.getByTestId('PerkUpdateScreen.ConfirmButton'));
    });

    iShouldSeeDrawDeckCount(then);
  });
});
