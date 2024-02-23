import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchShowDetails = createAsyncThunk(
  'showDetails/fetchShowDetail',
  async (permalink: string, thunkAPI) => {
    try {
      const res = await axios.get(`https://www.episodate.com/api/show-details?q=${permalink}`)

      return res.data.tvShow
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
