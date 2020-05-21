import {combatModifierSelectors, SliceProps} from '@combat-modifier';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CharacterSelectionScreen, HomeScreen, PerkUpdateScreen} from '@screens';
import {persisted, State} from '@store';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider as StoreProvider, useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

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

const App = () => {
  return (
    <StoreProvider store={persisted.store}>
      <PersistGate loading={null} persistor={persisted.persistor}>
        <PaperProvider>
          <NavigationContainer>
            <RootStack.Navigator mode="modal">
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
            </RootStack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};
export default App;
