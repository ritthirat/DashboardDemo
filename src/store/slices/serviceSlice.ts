import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { ResponseUploadFile } from '@/types/serviceType'

interface UserState {
  uploadFile: ResponseUploadFile | null
}

const initialState: UserState = {
  uploadFile: null
}

const serviceSlice = createSlice({
  name: 'service',
  initialState: initialState,
  reducers: {
    setUploadFile: (state, action: PayloadAction<ResponseUploadFile>) => {
      state.uploadFile = action.payload
    }
  }
})

export const { setUploadFile } = serviceSlice.actions
export default serviceSlice.reducer
