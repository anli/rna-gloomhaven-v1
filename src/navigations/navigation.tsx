import {analytics, useAnalytics} from '@analytics';
import {combatModifierSelectors, SliceProps} from '@combat-modifier';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AnalyticsConsentScreen,
  CharacterSelectionScreen,
  HomeScreen,
  PerkUpdateScreen,
} from '@screens';
import {State} from '@store';
import R from 'ramda';
import React, {useEffect, useRef} from 'react';
import useAppState from 'react-native-appstate-hook';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
const getTab = (slice: SliceProps) => (
  <Stack.Navigator>
    <Stack.Screen
      name={slice}
      component={HomeScreen.Component}
      options={HomeScreen.Options}
      initialParams={{slice}}
    />
  </Stack.Navigator>
);
const FirstTab = () => getTab('combatModifier');
const SecondTab = () => getTab('combatModifier2');
const ThirdTab = () => getTab('combatModifier3');
const FourthTab = () => getTab('combatModifier4');

const ICONS = {
  combatModifier: 'numeric-1-box',
  combatModifier2: 'numeric-2-box',
  combatModifier3: 'numeric-3-box',
  combatModifier4: 'numeric-4-box',
};
const WHITE_BACKGROUND_STYLE = {backgroundColor: '#fff'};
const Tab = createMaterialBottomTabNavigator();
const Tabs = () => {
  const state = useSelector<State, State>(res => res);

  return (
    <Tab.Navigator
      initialRouteName="combatModifier"
      shifting={false}
      barStyle={WHITE_BACKGROUND_STYLE}
      screenOptions={({route}: {route: any}) => {
        const key: SliceProps = route.name;
        return {
          tabBarIcon: ({color}) => {
            return <Icon name={ICONS[key]} color={color} size={24} />;
          },
          tabBarLabel: combatModifierSelectors.characterSelection(state[key]),
        };
      }}>
      <Tab.Screen name="combatModifier" component={FirstTab} />
      <Tab.Screen name="combatModifier2" component={SecondTab} />
      <Tab.Screen name="combatModifier3" component={ThirdTab} />
      <Tab.Screen name="combatModifier4" component={FourthTab} />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

const Navigation = () => {
  const routeNameRef = useRef();
  const navigationRef: any = useRef();
  const {data: analyticsData} = useAnalytics();
  const isPresentConsentForm = R.isNil(analyticsData.hasUserConsent);

  useEffect(() => {
    const state = navigationRef?.current?.getRootState();
    routeNameRef.current = getActiveRouteName(state);
  }, []);

  useAppState({
    onForeground: () => analytics().logAppOpen(),
  });

  return (
    <NavigationContainer
      ref={navigationRef}
      onStateChange={state => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(state);

        if (previousRouteName !== currentRouteName) {
          analytics().setCurrentScreen(currentRouteName);
        }

        routeNameRef.current = currentRouteName;
      }}>
      <RootStack.Navigator mode="modal">
        {isPresentConsentForm ? (
          <RootStack.Screen
            name="AnalyticsConsentScreen"
            component={AnalyticsConsentScreen.Component}
            options={AnalyticsConsentScreen.Options}
          />
        ) : (
          <>
            <RootStack.Screen
              name="Main"
              component={Tabs}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="PerkUpdateScreen"
              component={PerkUpdateScreen.Component}
              options={PerkUpdateScreen.Options}
            />
            <RootStack.Screen
              name="CharacterSelectionScreen"
              component={CharacterSelectionScreen.Component}
              options={CharacterSelectionScreen.Options}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const getActiveRouteName = (state: any): any => {
  if (state) {
    const route = state?.routes[state.index];

    if (route.state) {
      return getActiveRouteName(route?.state);
    }

    return route.name;
  }

  return 'combatModifier';
};