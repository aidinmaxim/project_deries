import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchShows = createAsyncThunk(
  'shows/fetchShows',
  async (page: number = 1, thunkAPI) => {
    try {
      const res = await axios.get(`https://www.episodate.com/api/most-popular?page=${page}`)
      return res.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)
