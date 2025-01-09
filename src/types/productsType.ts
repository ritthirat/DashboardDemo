export type ProductList = Array<{
  id: string
  venues_id: string
  order_index: number
  name: string
  type: string
  description: string
  thumbnail: string
  minPrice: number
  enabled: boolean
  createAt: string
  updatedAt: string
}>

export type AddProductType = {
  name: string
  type: string
  description: string
  thumbnail: string | null
  minPrice: number
  enabled: boolean
}

export type UpdateProductType = {
  name: string
  type: string
  description: string
  thumbnail: string | null
  minPrice: number
  enabled: boolean
}

export type Product = {
  name: string
  type: string
  description: string
  thumbnail: string | null
  minPrice: number
  enabled: boolean
}
