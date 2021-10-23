import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

export interface RadioState {
  value: string;
}

const initialState: RadioState = {
  value: ""
};

export const radioSlice = createSlice({
  name: 'radio',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = radioSlice.actions;

export const selectText = (state: RootState) => state.radio.value;

export default radioSlice.reducer;
