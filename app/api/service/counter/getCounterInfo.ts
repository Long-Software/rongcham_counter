'use server'

import { cookies } from 'next/headers'
import { api } from '../../api'

const getCounterInfo = async (token: string): Promise<ApiResponse> => {
  try {
    const id = cookies().get('counter_id')?.value
    const res = await api.get(`/counter-info/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    const data = res.data
    if (data.status == 'error') throw new Error(data.message)
    return data
  } catch (error) {
    throw error
  }
}

export default getCounterInfo
