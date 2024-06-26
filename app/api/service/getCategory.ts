'use server'
import { api } from '../api'
import { ApiResponse } from '../ApiResponse'

export const getCategory = async (token: string): Promise<ApiResponse> => {
  try {
    const res = await api.get('/categories', {
      headers: { Authorization: `Bearer ${token}` }
    })
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data
  } catch (error) {
    throw error
  }
}
