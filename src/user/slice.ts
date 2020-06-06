import {createSlice} from '@reduxjs/toolkit';
import {State} from './type';

/* istanbul ignore next */
const slice = createSlice({
  name: 'user',
  initialState: {
    isDarkMode: false,
    userId: undefined,
  },
  reducers: {
    setIsDarkMode: (state: State, action: any) => {
      state.isDarkMode = action.payload;
    },
    setUserId: (state: State, action: any) => {
      state.userId = action.payload;
    },
  },
});

export default slice;
