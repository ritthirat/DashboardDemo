import type { Dispatch } from '@reduxjs/toolkit'

import Service from '@/classes/Service'

import type { ResponseUploadFile } from '@/types/serviceType'
import type { ResponseData } from '@/plugins/type'
import { setUploadFile } from '../slices/serviceSlice'

const service = new Service()

export const uploadFile = async (dispatch: Dispatch, file: File): Promise<ResponseData<ResponseUploadFile>> => {
  try {
    const response: ResponseData<ResponseUploadFile> = await service.uploadFile(file)

    dispatch(setUploadFile(response.data))

    return response
  } catch (error) {
    throw error
  }
}
