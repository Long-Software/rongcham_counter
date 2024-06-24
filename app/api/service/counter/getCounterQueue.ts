'use server'

import { api } from '../../api'

export const getAssignQueue = async (
  token: string
): Promise<CounterQueueInfo[]> => {
  try {
    const res = await api.get(`/counter-queues?token=${token}&status=serve`)
    // const res = await axios.get(
    //   `${process.env.NEXT_PUBLIC_API_URL}/counter-queues?token=${business_token}&status=serve`
    // )
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data.data
  } catch (error) {
    throw error
  }
}
