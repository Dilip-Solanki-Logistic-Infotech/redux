import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface CheckboxState {
  value: string[];
}

const initialState: CheckboxState = {
  value: [],
};

export const checkboxSlice = createSlice({
  name: "checkbox",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string[]>) => {
      state.value = action.payload;
    },
    clearState: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { changeValue, clearState } = checkboxSlice.actions;

export const selectText = (state: RootState) => state.checkbox.value;

export default checkboxSlice.reducer;
