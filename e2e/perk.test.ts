import {by, device, element, expect} from 'detox';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';

const feature = loadFeature('./perk.feature', {
  loadRelativePath: true,
});

defineFeature(feature, test => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  const iShouldSeeText = (step: DefineStepFunction) => {
    step(/^I should see "(.*)"$/, async (text: string) => {
      await expect(element(by.text(text))).toBeVisible();
    });
  };

  const iAmAtPerkUpdateScreen = (step: DefineStepFunction) => {
    step('I am at "Perk Update Screen"', async () => {
      await element(by.id('HomeScreen.UpdatePerkButton')).tap();
      await expect(element(by.id('PerkUpdateScreen'))).toBeVisible();
    });
  };

  const iShouldSeeDrawDeckCount = (step: DefineStepFunction) => {
    step(/^I should see "Draw Deck Count (.*)"$/, async (count: string) => {
      await expect(element(by.text(`DRAW (${count})`))).toBeVisible();
    });
  };

  const iSwipeUp = (step: DefineStepFunction) => {
    step(/^I swipe up "(.*)"$/, async (count: string) => {
      if (count === '1') {
        await element(by.id('PerkUpdateScreen.PerkList')).swipe('up', 'fast');
      }
    });
  };

  test('Data is loaded', ({given, when, then}) => {
    given('data is "Spellweaver"', () => {});

    iAmAtPerkUpdateScreen(when);

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

  test('Select Spellweaver Perk', async ({given, when, then}) => {
    given('data is "Spellweaver"', () => {});

    iAmAtPerkUpdateScreen(given);

    iSwipeUp(when);

    when(/^I press "(.*)"$/, async (perk: string) => {
      await element(by.text(perk)).tap();
    });

    when('I press "Confirm Button"', async () => {
      await element(by.id('PerkUpdateScreen.ConfirmButton')).tap();
    });

    iShouldSeeDrawDeckCount(then);
  });

  test('Cancel perk selection', async ({given, when, then}) => {
    given('data is "Spellweaver"', () => {});

    iAmAtPerkUpdateScreen(given);

    when(/^I press "(.*)"$/, async (perk: string) => {
      await element(by.text(perk)).tap();
    });

    when(/^I press "(.*)"$/, async (perk: string) => {
      await element(by.text(perk)).tap();
    });

    when('I press "Confirm Button"', async () => {
      await element(by.id('PerkUpdateScreen.ConfirmButton')).tap();
    });

    iShouldSeeDrawDeckCount(then);
  });

  test('Perk is previously selected', async ({given, when, then}) => {
    given('data is "Spellweaver"', () => {});

    iAmAtPerkUpdateScreen(given);

    given(/^I press "(.*)"$/, async (perk: string) => {
      await element(by.text(perk)).tap();
    });

    given('I press "Confirm Button"', async () => {
      await element(by.id('PerkUpdateScreen.ConfirmButton')).tap();
    });

    iAmAtPerkUpdateScreen(when);

    when(/^I press "(.*)"$/, async (perk: string) => {
      await element(by.text(perk)).tap();
    });

    when('I press "Confirm Button"', async () => {
      await element(by.id('PerkUpdateScreen.ConfirmButton')).tap();
    });

    iShouldSeeDrawDeckCount(then);
  });

  test('Select Cragheart Perk', async ({given, when, then}) => {
    given('data is "Cragheart"', async () => {
      await element(by.id('HomeScreen.CharacterSelectionButton')).tap();
      await expect(element(by.id('CharacterSelectionScreen'))).toBeVisible();
      await element(by.id('CragheartButton')).tap();
    });

    iAmAtPerkUpdateScreen(given);

    iSwipeUp(when);

    when(/^I press "(.*)"$/, async (perk: string) => {
      await element(by.text(perk)).tap();
    });

    when('I press "Confirm Button"', async () => {
      await element(by.id('PerkUpdateScreen.ConfirmButton')).tap();
    });

    iShouldSeeDrawDeckCount(then);
  });
});
