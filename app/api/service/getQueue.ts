'use server'
import { api } from '../api'

export const getQueue = async (business_token: string): Promise<QueueInfo[]> => {
  try {
    const res = await api.get(`/queues`, {headers:{ 'user_id': business_token }})
    if (res.data.status == 'error') throw new Error(res.data.message)
      console.log(res.data.data)
    return res.data.data
  } catch (error) {
    throw error
  }
}
