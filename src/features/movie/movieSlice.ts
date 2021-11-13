import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

export interface MovieState {
  isLoading: boolean;
  list: object[];
  isOpenModal: boolean;
  details: any;
}

const initialState: MovieState = {
  isLoading: false,
  list: [],
  isOpenModal: false,
  details: {},
};

export const getMoviesList = createAsyncThunk(
  "movie/list",
  async (payload, { dispatch }) => {
    return await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=11f727c6587b8c26851ac98ad7b72212"
    )
      .then((response) => response.json())
      .then((result) => {
        const results = result.results;
        dispatch(setList(results));
      })
      .catch((error) => error);
  }
);

export const getMovieById = createAsyncThunk(
  "movie/details",
  async (id: any, { dispatch }) => {
    return await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=11f727c6587b8c26851ac98ad7b72212`
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch(setDetails(result));
      })
      .catch((error) => error);
  }
);

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<object[]>) => {
      state.list = action.payload;
    },
    setDetails: (state, action: PayloadAction<object>) => {
      state.details = action.payload;
    },
    closeDetails: (state) => {
      state.isOpenModal = false;
      state.details = {};
    },
    clearState: (state) => {
      state = initialState;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMoviesList.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getMovieById.fulfilled, (state, action) => {
        state.isOpenModal = true;
      });
  },
});

export const { clearState, setList, setDetails, closeDetails } =
  movieSlice.actions;

export const getIsLoading = (state: RootState) => state.movie.isLoading;
export const getList = (state: RootState) => state.movie.list;
export const getIsOpenModal = (state: RootState) => state.movie.isOpenModal;
export const getDetails = (state: RootState) => state.movie.details;

export default movieSlice.reducer;
