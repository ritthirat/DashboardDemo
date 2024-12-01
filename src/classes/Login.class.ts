import instance from '@/plugins/instance'

class Login {
  constructor() {}
  async login(username: string, password: string) {
    const response: any = await instance.call('post', '/v1/web-office/authen/login', {
      username,
      password
    })

    instance.setAuthorization(response.data.token)

    return response
  }
}
export default Login
