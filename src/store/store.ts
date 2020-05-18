import {combatModifierSlice} from '@combat-modifier';
import AsyncStorage from '@react-native-community/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {persistReducer, persistStore} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers({
  combatModifier: combatModifierSlice.reducer,
});

const persistedReducer = persistReducer<any>(persistConfig, rootReducer);

const epics: any[] = [];

const rootEpic = (action$: any) => combineEpics(...epics)(action$).pipe();

const getPersisted = () => {
  const epicMiddleware = createEpicMiddleware();
  const store = configureStore({
    reducer: persistedReducer,
    middleware: [epicMiddleware],
  });

  const persistor = persistStore(store);

  epicMiddleware.run(rootEpic);
  return {store, persistor};
};

export const getStore = () => {
  const epicMiddleware = createEpicMiddleware();
  const store = configureStore({
    reducer: {
      combatModifier: combatModifierSlice.reducer,
    },
    middleware: [epicMiddleware],
  });

  epicMiddleware.run(rootEpic);
  return store;
};

export const store = getStore();

export const persisted = getPersisted();

export type State = ReturnType<typeof store.getState>;
