import {createSlice} from '@reduxjs/toolkit';
import {State} from './type';

/* istanbul ignore next */
const slice = createSlice({
  name: 'analytics',
  initialState: {
    hasUserConsent: undefined,
  },
  reducers: {
    setHasUserConsent: (state: State, action: any) => {
      state.hasUserConsent = action.payload;
    },
  },
});

export default slice;
