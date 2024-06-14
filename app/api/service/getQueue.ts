'use server'
import axios from 'axios'

export const getQueue = async (business_token: string): Promise<QueueInfo[]> => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/queues?token=${business_token}`)
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data.data
  } catch (error) {
    throw error
  }
}
