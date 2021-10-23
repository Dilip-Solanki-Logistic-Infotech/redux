import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

export interface TextfieldState {
  value: string;
}

const initialState: TextfieldState = {
  value: ""
};

export const textfieldSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = textfieldSlice.actions;

export const selectText = (state: RootState) => state.text.value;

export default textfieldSlice.reducer;
