'use server'

import { cookies } from 'next/headers'
import { api } from '../../api'

const getCounterInfo = async (token: string): Promise<CounterInfo> => {
  try {
    const id = cookies().get('counter_id')?.value
    const res = await api.get(`/counter-info/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data.data
  } catch (error) {
    throw error
  }
}

export default getCounterInfo
