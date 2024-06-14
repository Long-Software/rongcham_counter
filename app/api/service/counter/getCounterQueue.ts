'use server'

import axios from 'axios'

export const getAssignQueue = async (
  business_token: string
): Promise<CounterQueueInfo[]> => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/counter-queues?token=${business_token}&status=serve`
    )
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data.data
  } catch (error) {
    throw error
  }
}
