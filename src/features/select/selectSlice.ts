import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface SelectState {
  value: string;
}

const initialState: SelectState = {
  value: "",
};

export const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    clearState: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { changeValue, clearState } = selectSlice.actions;

export const selectText = (state: RootState) => state.select.value;

export default selectSlice.reducer;
