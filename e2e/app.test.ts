import {by, device, element, expect} from 'detox';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';

const feature = loadFeature('./app.feature', {
  loadRelativePath: true,
});

defineFeature(feature, test => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  const iPressDrawButton = (step: DefineStepFunction) => {
    step('I press "Draw Button"', async () => {
      await element(by.id('HomeScreen.DrawButton')).tap();
    });
  };

  const iPressAddCardTypeButton = (step: DefineStepFunction) => {
    step(/^I press "Add (.*) Card Button"$/, async (cardType: string) => {
      await element(by.id(`HomeScreen.Add${cardType}Button`)).tap();
    });
  };

  test('Data is loaded', ({given, when, then}) => {
    given('I am any', () => {});

    when('I am at "Home Screen"', () => {});

    then('I should see "Spellweaver"', async () => {
      await expect(element(by.text('Spellweaver'))).toBeVisible();
    });

    then('I should see "Draw Button"', async () => {
      await expect(element(by.id('HomeScreen.DrawButton'))).toBeVisible();
    });

    then('I should see "Draw Deck Count"', async () => {
      await expect(element(by.text('DRAW (20)'))).toBeVisible();
    });
  });

  test('Draw card', ({given, when, then}) => {
    given('I am at "Home Screen"', () => {});

    iPressDrawButton(when);

    then('I should see "Drawn Card"', async () => {});

    then('I should see "Draw Deck Count Decrease By 1"', async () => {
      await expect(element(by.text('DRAW (19)'))).toBeVisible();
    });
  });

  test('Shuffle discard into draw', ({given, when, then}) => {
    given('I am at "Home Screen"', () => {});

    iPressDrawButton(given);

    when('I press "Shuffle Button"', async () => {
      await element(by.id('HomeScreen.ShuffleButton')).tap();
    });

    then('I should see "No Drawn Card"', async () => {});

    then('I should see "Draw Deck Count back to original"', async () => {
      await expect(element(by.text('DRAW (20)'))).toBeVisible();
    });
  });

  test('Add bless/curse card into draw', ({given, when, then}) => {
    given('I am at "Home Screen"', () => {});

    iPressAddCardTypeButton(when);

    then('I should see "Draw Deck Count Increase by 1"', async () => {
      await expect(element(by.text('DRAW (21)'))).toBeVisible();
    });
  });

  test('Remove bless/curse card from draw', ({given, when, then}) => {
    given('I am at "Home Screen"', () => {});

    iPressAddCardTypeButton(given);

    when(/^I press "Remove (.*) Card Button"$/, async (cardType: string) => {
      await element(by.id(`HomeScreen.Remove${cardType}Button`)).tap();
    });

    then('I should see "Draw Deck Count back to original"', async () => {
      await expect(element(by.text('DRAW (20)'))).toBeVisible();
    });
  });
});
