import {BannerAd} from '@admob';
import {analytics, useAnalytics} from '@analytics';
import {combatModifierSelectors, SliceProps} from '@combat-modifier';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  AnalyticsConsentScreen,
  CharacterSelectionScreen,
  HomeScreen,
  PerkUpdateScreen,
  SettingScreen,
} from '@screens';
import {State} from '@store';
import R from 'ramda';
import React, {useEffect, useRef} from 'react';
import useAppState from 'react-native-appstate-hook';
import 'react-native-gesture-handler';
import {Theme, useTheme} from 'react-native-paper';
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
const SettingTab = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SettingScreen"
      component={SettingScreen.Component}
      options={SettingScreen.Options}
    />
  </Stack.Navigator>
);

const ICONS = {
  combatModifier: 'numeric-1-box',
  combatModifier2: 'numeric-2-box',
  combatModifier3: 'numeric-3-box',
  combatModifier4: 'numeric-4-box',
  setting: 'settings',
};
const Tab = createMaterialBottomTabNavigator();
const getTabBarLabel = (state: State, key: SliceProps | 'setting') => {
  if (key === 'setting') {
    return 'Settings';
  }
  return combatModifierSelectors.characterSelection(state[key]);
};

const Tabs = () => {
  const state = useSelector<State, State>(res => res);

  return (
    <>
      <BannerAd />
      <Tab.Navigator
        initialRouteName="combatModifier"
        shifting={false}
        screenOptions={({route}: {route: any}) => {
          const key: SliceProps | 'setting' = route.name;

          return {
            tabBarIcon: ({color}) => {
              return <Icon name={ICONS[key]} color={color} size={24} />;
            },
            tabBarLabel: getTabBarLabel(state, key),
          };
        }}>
        <Tab.Screen name="combatModifier" component={FirstTab} />
        <Tab.Screen name="combatModifier2" component={SecondTab} />
        <Tab.Screen name="combatModifier3" component={ThirdTab} />
        <Tab.Screen name="combatModifier4" component={FourthTab} />
        <Tab.Screen name="setting" component={SettingTab} />
      </Tab.Navigator>
    </>
  );
};

const RootStack = createStackNavigator();

const Navigation = () => {
  const theme = useTheme();
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
      theme={getNavigationTheme(theme)}
      ref={navigationRef}
      onStateChange={res => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = getActiveRouteName(res);

        if (previousRouteName !== currentRouteName) {
          analytics().setCurrentScreen(currentRouteName);
        }

        routeNameRef.current = currentRouteName;
      }}>
      <RootStack.Navigator mode="modal">
        {isPresentConsentForm ? (
          <RootStack.Screen
            name="InitAnalyticsConsentScreen"
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
            <RootStack.Screen
              name="AnalyticsConsentScreen"
              component={AnalyticsConsentScreen.Component}
              options={AnalyticsConsentScreen.Options}
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

const getNavigationTheme = (theme: Theme) => {
  if (theme.dark) {
    return {
      dark: theme.dark,
      colors: {
        ...DarkTheme.colors,
        primary: theme.colors.primary,
        background: theme.colors.background,
        text: theme.colors.text,
      },
    };
  }
  return {
    dark: theme.dark,
    colors: {
      ...DefaultTheme.colors,
      primary: 'white',
      background: theme.colors.background,
      text: theme.colors.text,
    },
  };
};
