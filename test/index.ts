import {DefineStepFunction} from 'jest-cucumber';

export {default as render} from './render';

export const loadFeatureOptions = {
  loadRelativePath: true,
};

export const thenIShouldSeeText = (
  then: DefineStepFunction,
  callback: (text: string) => void,
) => {
  then(/^I should see "(.*)"$/, async (text: string) => {
    callback(text);
  });
};
