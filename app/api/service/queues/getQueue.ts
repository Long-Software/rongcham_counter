'use server'
import { api } from '../../api'

export const getQueue = async (token: string):Promise<ApiResponse> => {
  try {
    const res = await api.get(`/queues`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data
  } catch (error) {
    throw error
  }
}
