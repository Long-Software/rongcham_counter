'use server'

import { api } from '../../api'

export const getAssignQueue = async (token: string): Promise<ApiResponse> => {
  try {
    const res = await api.get(`/counter-queues?status=serve`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    const data = res.data
    if (data.status == 'error') throw new Error(data.message)
    return data
  } catch (error) {
    throw error
  }
}
