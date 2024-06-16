'use server'
import { createClient } from '@/utils/supabase/server'
import { api } from '../api'

export const getQueue = async (business_token: string): Promise<QueueInfo[]> => {
  const supabase = createClient()
  
  try {
    const res = await api.get(`/queues?token=${business_token}`)
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data.data
  } catch (error) {
    throw error
  }
}
