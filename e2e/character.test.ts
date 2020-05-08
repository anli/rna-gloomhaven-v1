import {by, device, element, expect} from 'detox';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';

const feature = loadFeature('./character.feature', {
  loadRelativePath: true,
});

defineFeature(feature, test => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  const iShouldSeeButton = (step: DefineStepFunction) => {
    step(/^I should see "(.*) Button"$/, async (button: string) => {
      await expect(element(by.id(`${button}Button`))).toBeVisible();
    });
  };

  const iAmAtCharacterSelectionScreen = (step: DefineStepFunction) => {
    step('I am at "Character Selection Screen"', async () => {
      await element(by.id('HomeScreen.CharacterSelectionButton')).tap();
      await expect(element(by.id('CharacterSelectionScreen'))).toBeVisible();
    });
  };

  test('Data is loaded', ({given, when, then}) => {
    given('data is "loaded"', () => {});

    iAmAtCharacterSelectionScreen(when);

    iShouldSeeButton(then);
    iShouldSeeButton(then);
    iShouldSeeButton(then);
    iShouldSeeButton(then);
    iShouldSeeButton(then);

    iShouldSeeButton(then);
  });

  test('Character selected', ({given, when, then}) => {
    iAmAtCharacterSelectionScreen(given);

    when(/^I press "(.*) Button"$/, async (button: string) => {
      await element(by.id(`${button}Button`)).tap();
    });

    then(/^I should see "(.*)"$/, async (text: string) => {
      await expect(element(by.id('HomeScreen'))).toBeVisible();
      await expect(element(by.text(text))).toBeVisible();
    });
  });
});
