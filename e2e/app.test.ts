import {by, device, element, expect} from 'detox';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';

const feature = loadFeature('./app.feature', {
  loadRelativePath: true,
});

const thenIShouldSee = (
  then: DefineStepFunction,
  callback: (text: string) => void,
) => {
  then(/^I should see "(.*)"$/, async (text: string) => {
    callback(text);
  });
};

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
  });
});
