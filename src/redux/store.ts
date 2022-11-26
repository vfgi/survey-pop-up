import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducers'

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
  }),
})

export type AppDispatch = typeof store.dispatch
