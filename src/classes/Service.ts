import instance from '@/plugins/instance'
import type { ResponseData } from '@/plugins/type'
import type { ResponseUploadFile } from '@/types/serviceType'

class Service {
  token: string | null
  constructor() {
    this.token = localStorage.getItem('token')
  }

  // async uploadFile (file: File): Promise<ResponseData<ResponseUploadFile>> {
  //   const formData = new FormData()
  //   formData.append('file', file)

  //   const response: ResponseData<ResponseUploadFile> = await instance.call('post', '/v1/services/upload', formData, {
  //     Authorization: `Bearer ${this.token}`
  //   })

  //   return response
  // }

  async uploadFile(file: File): Promise<ResponseData<ResponseUploadFile>> {
    const formData = new FormData()

    formData.append('file', file)

    try {
      const formDataObj = Object.fromEntries(formData)

      const response = await instance.call('post', '/v1/services/upload', formDataObj, {
        'Content-Type': 'multipart/form-data'
      })

      return response as ResponseData<ResponseUploadFile>
    } catch (error) {
      console.error('Upload failed:', error)
      throw error
    }
  }
}
export default Service
