import {CombatModifierService} from '@combat-modifier';
import {mockNavigate} from '@mocks';
import {loadFeatureOptions, render} from '@test';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';
import React from 'react';
import 'react-native';
import {fireEvent, RenderAPI} from 'react-native-testing-library';
import * as redux from 'react-redux';
import HomeScreen from './home';

const feature = loadFeature('./home.feature', loadFeatureOptions);

defineFeature(feature, test => {
  let component: RenderAPI;

  beforeEach(() => {
    jest.restoreAllMocks();
    mockNavigate.mockReset();
    jest
      .spyOn(CombatModifierService, 'usePreloadImages')
      .mockReturnValue(undefined);
  });

  const iPressDrawButton = (step: DefineStepFunction) => {
    step('I press "Draw Button"', () => {
      fireEvent.press(component.getByTestId('HomeScreen.DrawButton'));
    });
  };

  const iPressActionCardTypeButton = (step: DefineStepFunction) => {
    step(
      /^I press "(.*) (.*) Card Button"$/,
      (action: string, cardType: string) => {
        fireEvent.press(
          component.getByTestId(`HomeScreen.${action}${cardType}Button`),
        );
      },
    );
  };

  const iAmAtScreen = (step: DefineStepFunction) => {
    step('I am at "Home Screen"', () => {
      component = render(<HomeScreen.Component />);
    });
  };

  test('Data is loaded', ({given, when, then}) => {
    given('I am any', () => {});

    iAmAtScreen(when);

    then('I should see "Spellweaver"', () => {
      expect(component.getByText('Spellweaver')).toBeDefined();
    });

    then('I should see "Draw Button"', () => {
      expect(component.getByTestId('HomeScreen.DrawButton')).toBeDefined();
    });

    then('I should see "Draw Deck Count"', () => {
      expect(component.getByText('Draw (20)')).toBeDefined();
    });
  });

  test('Draw card', async ({given, when, then}) => {
    iAmAtScreen(given);

    iPressDrawButton(when);

    then('I should see "Drawn Card"', () => {
      expect(
        component.getByTestId('HomeScreen.DiscardCards.Item.0'),
      ).toBeDefined();
    });

    then('I should see "Draw Deck Count Decrease By 1"', () => {
      expect(component.getByText('Draw (19)')).toBeDefined();
    });
  });

  test('No card to draw', ({given, when, then}) => {
    given('data is "Draw Deck Count 1"', () => {
      jest.spyOn(redux, 'useSelector').mockReturnValue({
        combatModifier: {
          cards: [],
          perkSelection: {},
          characterSelection: 'Spellweaver',
          drawCards: [],
          discardCards: [],
        },
      });
    });

    given('I am at "Home Screen"', () => {
      component = render(<HomeScreen.Component />);
    });

    iPressDrawButton(when);
    iPressDrawButton(when);

    then('I should see "Draw Deck Count 0"', () => {
      expect(component.getByText('Draw (0)')).toBeDefined();
    });
  });

  test('Shuffle discard into draw', ({given, when, then}) => {
    iAmAtScreen(given);

    iPressDrawButton(given);

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
      expect(component.getByText('Draw (20)')).toBeDefined();
    });
  });

  test('Add bless/curse/equipment card into draw', ({given, when, then}) => {
    iAmAtScreen(given);

    iPressActionCardTypeButton(when);

    then('I should see "Draw Deck Count Increase by 1"', async () => {
      expect(component.getByText('Draw (21)')).toBeDefined();
    });
  });

  test('Remove bless/curse/equipment card from draw', ({given, when, then}) => {
    iAmAtScreen(given);

    iPressActionCardTypeButton(given);

    iPressActionCardTypeButton(when);
    iPressActionCardTypeButton(when);

    then('I should see "Draw Deck Count back to original"', async () => {
      expect(component.getByText('Draw (20)')).toBeDefined();
    });
  });

  test('Update perks', ({given, when, then}) => {
    iAmAtScreen(given);

    when('I press "Update Perk Button"', async () => {
      fireEvent.press(component.getByTestId('HomeScreen.UpdatePerkButton'));
    });

    then('I should see "Perks Screen"', async () => {
      expect(mockNavigate).toBeCalledTimes(1);
      expect(mockNavigate).toBeCalledWith('PerkUpdateScreen');
    });
  });

  test('Character selection', ({given, when, then}) => {
    iAmAtScreen(given);

    when('I press "Character Selection Button"', async () => {
      fireEvent.press(
        component.getByTestId('HomeScreen.CharacterSelectionButton'),
      );
    });

    then('I should see "Character Selection Screen"', async () => {
      expect(mockNavigate).toBeCalledTimes(1);
      expect(mockNavigate).toBeCalledWith('CharacterSelectionScreen');
    });
  });

  test('Draw shuffle card', ({given, when, then}) => {
    given('first card is "Miss Card"', async () => {
      jest.spyOn(redux, 'useSelector').mockReturnValue({
        combatModifier: {
          cards: [
            {
              name: 'Miss',
              imageUrl: 'https://picsum.photos/id/1/200/100',
              isShuffle: true,
            },
          ],
          perkSelection: {},
          characterSelection: 'Spellweaver',
          drawCards: [
            {
              name: 'Miss',
              imageUrl: 'https://picsum.photos/id/1/200/100',
              isShuffle: true,
            },
          ],
          discardCards: [
            {
              name: 'Miss',
              imageUrl: 'https://picsum.photos/id/1/200/100',
              isShuffle: true,
            },
          ],
        },
      });
    });

    iAmAtScreen(given);

    iPressDrawButton(when);

    then('I should see "Drawn Cards **Shuffle next round**"', () => {
      expect(
        component.getByText('Drawn Cards **Shuffle next round**'),
      ).toBeDefined();
    });
  });
});
