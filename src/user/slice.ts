import {createSlice} from '@reduxjs/toolkit';
import {State} from './type';

/* istanbul ignore next */
const slice = createSlice({
  name: 'user',
  initialState: {
    isDarkMode: false,
  },
  reducers: {
    setIsDarkMode: (state: State, action: any) => {
      state.isDarkMode = action.payload;
    },
  },
});

export default slice;
