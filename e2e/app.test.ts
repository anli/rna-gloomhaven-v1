import {by, device, element, expect} from 'detox';
import {defineFeature, DefineStepFunction, loadFeature} from 'jest-cucumber';

const feature = loadFeature('./app.feature', {
  loadRelativePath: true,
});

const thenIShouldSeeText = (then: DefineStepFunction) => {
  then(/^I should see "(.*)"$/, async (text: string) => {
    await expect(element(by.text(text))).toBeVisible();
  });
};

defineFeature(feature, test => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('Data is loaded', ({given, when, then}) => {
    given('I am any', () => {});

    when('I am at "Home Screen"', () => {});

    thenIShouldSeeText(then);
  });
});
