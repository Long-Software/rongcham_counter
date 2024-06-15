// 'use server'
import axios from 'axios'
import { api } from '../api'

export const getQueue = async (business_token: string): Promise<QueueInfo[]> => {
  try {
    const res = await api.get(`queues?token=${business_token}`)
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data.data
  } catch (error) {
    throw error
  }
}
