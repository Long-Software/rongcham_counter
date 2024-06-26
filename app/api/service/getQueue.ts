'use server'
import { createClient } from '@/utils/supabase/server'
import { api } from '../api'

export const getQueue = async (business_token: string): Promise<QueueInfo[]> => {
  try {
    const supabase = createClient()
    const {data, error} = await supabase.auth.getUser();
    console.log(data.user)

    const res = await api.get(`/queues`, {headers:{ 'user_id': business_token }})
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data.data
  } catch (error) {
    throw error
  }
}
