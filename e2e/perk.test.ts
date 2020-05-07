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

    when(/^I swipe up "(.*)"$/, async (count: string) => {
      if (count === '1') {
        await element(by.id('PerkUpdateScreen.PerkList')).swipe('up', 'fast');
      }
    });

    when(/^I press "(.*)"$/, async (perk: string) => {
      await element(by.text(perk)).tap();
    });

    when('I press "Confirm Button"', async () => {
      await element(by.id('PerkUpdateScreen.ConfirmButton')).tap();
    });

    then(/^I should see "Draw Deck Count (.*)"$/, async (count: string) => {
      await expect(element(by.text(`DRAW (${count})`))).toBeVisible();
    });
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

    then(/^I should see "Draw Deck Count (.*)"$/, async (count: string) => {
      await expect(element(by.text(`DRAW (${count})`))).toBeVisible();
    });
  });
});
