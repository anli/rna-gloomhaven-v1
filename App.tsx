import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {CharacterSelectionScreen, HomeScreen, PerkUpdateScreen} from '@screens';
import {persisted} from '@store';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createStackNavigator();
const HomeTab = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen.Component}
      options={HomeScreen.Options}
    />
    <Stack.Screen
      name="PerkUpdateScreen"
      component={PerkUpdateScreen.Component}
      options={PerkUpdateScreen.Options}
    />
    <Stack.Screen
      name="CharacterSelectionScreen"
      component={CharacterSelectionScreen.Component}
      options={CharacterSelectionScreen.Options}
    />
  </Stack.Navigator>
);
const WHITE_BACKGROUND_STYLE = {backgroundColor: '#fff'};
const Tab = createMaterialBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      labeled={false}
      activeColor="#000"
      barStyle={WHITE_BACKGROUND_STYLE}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
        }}
        name="HomeTab"
        component={HomeTab}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <StoreProvider store={persisted.store}>
      <PersistGate loading={null} persistor={persisted.persistor}>
        <PaperProvider>
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};
export default App;
