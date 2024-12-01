import axios from 'axios'

import type { AxiosInstance, Method } from 'axios'

class Instance {
  private instance: AxiosInstance
  private headers: Record<string, string | null>

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.NEXT_PUBLIC_BASE_URL
    })
    this.headers = {
      'Content-Type': 'application/json'
    }

    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token')

      if (token) {
        this.setAuthorization(token)
      }
    }
  }

  async call<T>(
    method: Method,
    url: string,
    data: Record<string, unknown> = {},
    headers: Record<string, string> = {}
  ): Promise<T> {
    try {
      const response = await this.instance({
        method,
        url,
        data,
        headers: {
          ...this.headers,
          ...headers
        }
      })

      return response.data as T
    } catch (error: any) {
      throw error
    }
  }

  setAuthorization(token: string): void {
    this.headers.Authorization = `Bearer ${token}`
    localStorage.setItem('token', token)
  }

  removeToken(): void {
    localStorage.removeItem('token')
    this.headers.Authorization = null
  }
}

export default Instance
