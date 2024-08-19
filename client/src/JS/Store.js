import { configureStore } from '@reduxjs/toolkit'
import contactslice from './contactSlice/contactslice'

export const store = configureStore({
  reducer: {contact:contactslice},
})