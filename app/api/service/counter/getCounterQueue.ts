'use server'

import { Counter, QueueHistory } from '@prisma/client'
import axios from 'axios'
import { getQueue } from '../getQueue'

export const getAssignQueue = async (
  business_token: string
): Promise<CounterQueueInfo[]> => {
  try {
    const res = await axios.get(
      `${process.env.API_URL}/counter-queues?token=${business_token}&status=serve`
    )
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data.data
  } catch (error) {
    throw error
  }
}
