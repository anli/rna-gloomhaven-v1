import {combatModifierSlice} from '@combat-modifier';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {combineEpics, createEpicMiddleware} from 'redux-observable';

const epicMiddleware = createEpicMiddleware();
const epics: any[] = [];

const rootEpic = (action$: any) => combineEpics(...epics)(action$).pipe();

const getStore = () => {
  const store = configureStore({
    reducer: {
      combatModifier: combatModifierSlice.reducer,
    },
    middleware: [...getDefaultMiddleware(), epicMiddleware],
  });

  epicMiddleware.run(rootEpic);
  return store;
};

const store = getStore();

export type State = ReturnType<typeof store.getState>;

export default store;
