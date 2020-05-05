import {by, device, element, expect} from 'detox';
import {defineFeature, loadFeature} from 'jest-cucumber';

const feature = loadFeature('./app.feature', {
  loadRelativePath: true,
});

defineFeature(feature, test => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

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
      await expect(element(by.text('3'))).toBeVisible();
    });
  });

  test('Draw card', ({given, when, then}) => {
    given('I am at "Home Screen"', () => {});

    when('I press "Draw Button"', async () => {
      await element(by.id('HomeScreen.DrawButton')).tap();
    });

    then('I should see "Drawn Card"', async () => {});

    then('I should see "Draw Deck Count Decrease By 1"', async () => {
      await expect(element(by.text('2'))).toBeVisible();
    });
  });

  test('Shuffle discard into draw', ({given, when, then}) => {
    given('I am at "Home Screen"', () => {});

    given('I press "Draw Button"', async () => {
      await element(by.id('HomeScreen.DrawButton')).tap();
    });

    when('I press "Shuffle Button"', async () => {
      await element(by.id('HomeScreen.ShuffleButton')).tap();
    });

    then('I should see "No Drawn Card"', async () => {});

    then('I should see "Draw Deck Count back to original"', async () => {
      await expect(element(by.text('3'))).toBeVisible();
    });
  });
});
