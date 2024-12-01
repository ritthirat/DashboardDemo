import { configureStore } from '@reduxjs/toolkit'

import rootSlice from './slices/rootSlice'

// สร้าง store และกำหนดค่า serializableCheck เป็น false
const store = configureStore({
  reducer: rootSlice,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

// สร้างชนิดข้อมูลสำหรับ RootState และ AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
