import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import counterReducer from '../features/counter/counterSlice';
import textfieldReducer from '../features/textfield/textfieldSlice';
import selectReducer from '../features/select/selectSlice';
import checkboxReducer from '../features/checkbox/checkboxSlice';
import radioReducer from '../features/radio/radioSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    text: textfieldReducer,
    select: selectReducer,
    checkbox: checkboxReducer,
    radio: radioReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

