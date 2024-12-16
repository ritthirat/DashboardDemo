export interface ResponseData<T> {
  status: string
  statusCode: number
  data: T
  error: string | null
}

export interface Pagination {
  page: number
  pageSize: number
  totalCount: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}
