import {createSlice} from '@reduxjs/toolkit';
import IShowsState from "./types/ShowDetailState";
import { fetchShowDetails } from "./showDetailsAction";

const initialState: IShowsState = {
  showDetails: [],
  isLoading: false,
  error: null,
}

export const showDetailsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShowDetails.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchShowDetails.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null

        state.showDetails = action.payload
      })
  .addCase(fetchShowDetails.rejected, (state, action) => {
        state.isLoading = false
        state.showDetails = []
        state.error = action.payload as string
      })
  },
});
export default showDetailsSlice;
