import instance from '@/plugins/instance'
import type { ResponseData } from '@/plugins/type'
import type { LoginData, ProfileData } from '@/types/authType'

class Login {
  constructor() {}
  async login(username: string, password: string): Promise<ResponseData<LoginData>> {
    const response: ResponseData<LoginData> = await instance.call('post', '/v1/web-venues/authen/login', {
      username,
      password
    })

    instance.setAuthorization(response.data.token)

    return response
  }

  async getProfile(): Promise<ResponseData<ProfileData>> {
    const token = localStorage.getItem('token')

    const response: ResponseData<ProfileData> = await instance.call(
      'get',
      '/v1/web-venues/authen/profile',
      {},
      { Authorization: `Bearer ${token}` }
    )

    return response as ResponseData<ProfileData>
  }
}

export default Login
