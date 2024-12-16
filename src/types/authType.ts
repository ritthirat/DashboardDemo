export interface ProfileData {
  id: string
  username: string
  role: string
  permission: string[]
  status: string
  createAt: string
  updatedAt: string
}

export interface LoginData {
  token: string
  user: User
}

interface User {
  id: string
  username: string
  role: string
  permission: string[]
  status: string
}
