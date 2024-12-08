import type { Dispatch } from 'redux'

import Login from '@/classes/Login.class'
import { setUserList } from '../slices/userSlice'

const venues = new Login()

export const venuesList = async (dispatch: Dispatch) => {
  try {
    const respons = await venues.venueslist()

    dispatch(setUserList(respons))
  } catch (error) {
    console.log(error)
  }
}
