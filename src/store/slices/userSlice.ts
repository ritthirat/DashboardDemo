import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// กำหนดชนิดข้อมูลสำหรับ state
interface UserState {
  user: string | null
  userList: string[] // หรือเปลี่ยนเป็นชนิดข้อมูลอื่นตามที่เหมาะสม
}

// กำหนดค่าเริ่มต้นของ state
const initialState: UserState = {
  user: null,
  userList: []
}

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload
    },
    setUserList: (state, action: PayloadAction<string[]>) => {
      state.userList = action.payload
    }
  }
})

// ส่งออก action และ reducer
export const { setUser, setUserList } = userSlice.actions
export default userSlice.reducer
