import type { Dispatch } from 'redux'

import type { ResponseData } from '@/plugins/type'
import type { ProfileData } from '@/types/authType'

import Auth from '@/classes/Auth.class'

import { setProfile } from '../slices/authSlice'

const auth = new Auth()

export const getProfile = async (dispatch: Dispatch): Promise<ResponseData<ProfileData>> => {
  try {
    const response: ResponseData<ProfileData> = await auth.getProfile()

    dispatch(setProfile(response.data))

    return response
  } catch (error) {
    throw error
  }
}
