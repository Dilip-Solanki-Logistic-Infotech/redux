import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';

export interface SelectState {
  value: string;
}

const initialState: SelectState = {
  value: ""
};

export const selectSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { changeValue } = selectSlice.actions;

export const selectText = (state: RootState) => state.select.value;

export default selectSlice.reducer;
