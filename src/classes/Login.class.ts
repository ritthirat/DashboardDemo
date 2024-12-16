import instance from '@/plugins/instance'

class Login {
  constructor() {}
  async login(username: string, password: string) {
    const response: any = await instance.call('post', '/v1/web-venues/authen/login', {
      username,
      password
    })

    instance.setAuthorization(response.data.token)

    return response
  }

  async venueslist() {
    const response: any = await instance.call('get', '/v1/web-office/venues')

    return response
  }
}
export default Login
