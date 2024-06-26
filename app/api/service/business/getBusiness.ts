'use server'
import { api } from '../../api'

export const getBusiness = async (token: string): Promise<ApiResponse> => {
  try {
    const res = await api.get('/businesses', {
      headers: { Authorization: `Bearer ${token}` }
    })
    const data = res.data
    if (data.status == 'error') throw new Error(data.message)
    return data
  } catch (error) {
    throw error
  }
}
