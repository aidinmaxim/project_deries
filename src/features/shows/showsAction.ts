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

// export const deleteProduct = createAsyncThunk(
//   'products/deleteProduct',
//   async (id: number|undefined, thunkAPI)=> {
//     try {
//       const res = await axios.delete(`https://fakestoreapi.com/products/${id}`)
//       return res.data
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message)
//     }
//   }
// )

// новый action на добавление продукта
// export const addProduct = createAsyncThunk(
//   'products/addProduct',
//   // получаем продукт, уточняем тип данных
//   async (product: IProduct, thunkAPI)=> {
//     try {
//       //в post запросе вы передаете через axios вторым параметром переменную с данными
//       const res = await axios.post(`https://fakestoreapi.com/products`, product)
//       return res.data
//     } catch (error: any) {
//       return thunkAPI.rejectWithValue(error.message)
//     }
//   }
// )
