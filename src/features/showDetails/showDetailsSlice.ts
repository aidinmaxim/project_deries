import {createSlice} from '@reduxjs/toolkit';
import IShowsState from "./types/ShowDetailState";
import { fetchShowDetails } from "./showDetailsAction";

const initialState: IShowsState = {
  showDetails: {
    id: 0,
    name: '',
    permalink: '',
    description: '',
    description_source: '',
    start_date: '',
    end_date: '',
    country: '',
    status: '',
    runtime: 0,
    network: '',
    youtube_link: '',
    image_path: '',
    image_thumbnail_path: '',
    rating: '',
    rating_count: '',
    genres: [],
    pictures: [],
  },
  isLoading: false,
  error: null,
}

export const showDetailsSlice = createSlice({
  name: 'showDetails',
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
