import {Data} from '@services';
import {loadFeatureOptions, render} from '@test';
import {defineFeature, loadFeature} from 'jest-cucumber';
import React from 'react';
import 'react-native';
import {fireEvent, RenderAPI} from 'react-native-testing-library';
import HomeScreen from './home';

const feature = loadFeature('./home.feature', loadFeatureOptions);

defineFeature(feature, test => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  test('Data is loaded', ({given, when, then}) => {
    let component: RenderAPI;

    given('I am any', () => {});

    when('I am at "Home Screen"', () => {
      component = render(<HomeScreen.Component />);
    });

    then('I should see "Spellweaver"', () => {
      expect(component.getByText('Spellweaver')).toBeDefined();
    });

    then('I should see "Draw Button"', () => {
      expect(component.getByTestId('HomeScreen.DrawButton')).toBeDefined();
    });

    then('I should see "Draw Deck Count"', () => {
      expect(component.getByText('Draw (3)')).toBeDefined();
    });
  });

  test('Draw card', ({given, when, then}) => {
    let component: RenderAPI;

    given('I am at "Home Screen"', () => {
      component = render(<HomeScreen.Component />);
    });

    when('I press "Draw Button"', () => {
      fireEvent.press(component.getByTestId('HomeScreen.DrawButton'));
    });

    then('I should see "Drawn Card"', () => {
      expect(
        component.getByTestId('HomeScreen.DiscardCards.Item.0'),
      ).toBeDefined();
    });

    then('I should see "Draw Deck Count Decrease By 1"', () => {
      expect(component.getByText('Draw (2)')).toBeDefined();
    });
  });

  test('No card to draw', ({given, when, then}) => {
    let component: RenderAPI;

    given('data is "Draw Deck Count 1"', () => {
      jest.spyOn(Data, 'get').mockReturnValue({
        character: 'Spellweaver',
        cards: [
          {name: 'Card A', imageUrl: 'https://picsum.photos/id/1/200/100'},
        ],
      });
    });

    given('I am at "Home Screen"', () => {
      component = render(<HomeScreen.Component />);
    });

    when('I press "Draw Button"', () => {
      fireEvent.press(component.getByTestId('HomeScreen.DrawButton'));
      expect(component.getByText('Draw (0)')).toBeDefined();
    });

    when('I press "Draw Button"', () => {
      fireEvent.press(component.getByTestId('HomeScreen.DrawButton'));
    });

    then('I should see "Draw Deck Count 0"', () => {
      expect(component.getByText('Draw (0)')).toBeDefined();
    });
  });

  test('Shuffle discard into draw', ({given, when, then}) => {
    let component: RenderAPI;

    given('I am at "Home Screen"', () => {
      component = render(<HomeScreen.Component />);
    });

    given('I press "Draw Button"', async () => {
      fireEvent.press(component.getByTestId('HomeScreen.DrawButton'));
      expect(
        component.queryByTestId('HomeScreen.DiscardCards.Item.0'),
      ).toBeDefined();
    });

    when('I press "Shuffle Button"', async () => {
      fireEvent.press(component.getByTestId('HomeScreen.ShuffleButton'));
      expect(
        component.queryByTestId('HomeScreen.DiscardCards.Item.0'),
      ).toBeNull();
    });

    then('I should see "No Drawn Card"', async () => {
      expect(
        component.queryAllByTestId('HomeScreen.DiscardCards.Item.0'),
      ).toEqual([]);
    });

    then('I should see "Draw Deck Count back to original"', async () => {
      expect(component.getByText('Draw (3)')).toBeDefined();
    });
  });
});
