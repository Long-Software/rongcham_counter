'use server'

import { cookies } from 'next/headers'
import { apiPost } from '../../api'

export const handleNext = async (token: string) => {
  try {
    const form = new FormData()
    form.append('counter_id', cookies().get('counter_id')?.value ?? '')

    const res = await apiPost.post(`/queues/next`, form, {
      headers: { Authorization: `Bearer ${token}` }
    })
    return res.data
  } catch (error) {
    throw error
  }
}
