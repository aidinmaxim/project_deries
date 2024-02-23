import {createSlice} from '@reduxjs/toolkit';
import IShowsState from "./types/ShowsState";
import { fetchShows } from "./showsAction";

const initialState: IShowsState = {
  shows: [],
  isLoading: false,
  error: null,
}

export const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchShows.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null

        state.shows = action.payload.tv_shows
      })
  .addCase(fetchShows.rejected, (state, action) => {
        state.isLoading = false
        state.shows = []
        state.error = action.payload as string
      })
  },
});
export default showsSlice;
