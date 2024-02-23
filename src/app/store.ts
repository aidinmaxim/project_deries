import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import authSlice from "../features/auth/authSlice";
import showsSlice from "../features/shows/showsSlice"
import showDetailsSlice from "../features/showDetails/showDetailsSlice"

export const store = configureStore({
  reducer: {
    user: authSlice.reducer,
    shows: showsSlice.reducer,
    showDetails: showDetailsSlice.reducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
