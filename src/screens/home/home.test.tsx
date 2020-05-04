import {loadFeatureOptions, render, thenIShouldSeeText} from '@test';
import {defineFeature, loadFeature} from 'jest-cucumber';
import React from 'react';
import 'react-native';
import HomeScreen from './home';

const feature = loadFeature('./home.feature', loadFeatureOptions);

defineFeature(feature, test => {
  test('Data is loaded', ({given, when, then}) => {
    let component: any;

    given('I am any', () => {});

    when('I am at "Home Screen"', () => {
      component = render(<HomeScreen.Component />);
    });

    thenIShouldSeeText(then, text => {
      expect(component.getByText(text)).toBeDefined();
    });
  });
});
