import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

import type { ProfileData } from '@/types/authType'

interface UserState {
  profile: ProfileData | null
}

const initialState: UserState = {
  profile: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileData>) => {
      state.profile = action.payload
    }
  }
})

export const { setProfile } = authSlice.actions
export default authSlice.reducer
