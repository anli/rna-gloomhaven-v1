import {CharacterSelectionScreen} from '@screens';
import {loadFeatureOptions, render} from '@test';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';
import React from 'react';
import 'react-native';
import {fireEvent, RenderAPI} from 'react-native-testing-library';
import * as redux from 'react-redux';

const feature = loadFeature(
  './character-selection.feature',
  loadFeatureOptions,
);

defineFeature(feature, test => {
  let component: RenderAPI;
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);
  });

  const iShouldSeeButton = (step: DefineStepFunction) => {
    step(/^I should see "(.*) Button"$/, (button: string) => {
      expect(component.getByTestId(`${button}Button`)).toBeDefined();
    });
  };

  test('Data is loaded', ({given, when, then}) => {
    given('data is "loaded"', () => {});

    when('I am at "Character Selection Screen"', () => {
      component = render(<CharacterSelectionScreen.Component />);
    });

    iShouldSeeButton(then);
    iShouldSeeButton(then);
    iShouldSeeButton(then);
    iShouldSeeButton(then);
    iShouldSeeButton(then);

    iShouldSeeButton(then);
  });

  test('Character selected', ({given, when, then}) => {
    given('I am at "Character Selection Screen"', () => {
      component = render(<CharacterSelectionScreen.Component />);
    });

    when(/^I press "(.*) Button"$/, (button: string) => {
      fireEvent.press(component.getByTestId(`${button}Button`));
    });

    then(/^I should see "(.*)"$/, async (text: string) => {
      expect(mockDispatch).toBeCalledWith({
        payload: text,
        type: 'combatModifier/setCharacterSelection',
      });
      mockDispatch.mockClear();
    });
  });
});
