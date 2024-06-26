'use server'
import { cookies } from 'next/headers'
import { apiPost } from '../../api'

const handleCounterLogin = async (
  token: string,
  access_code: string,
  pin: string
): Promise<ApiResponse> => {
  try {
    const form = new FormData()
    form.append('access_code', access_code)
    form.append('pin', pin)
    const res = await apiPost.post(`/auth/counter-login`, form, {
      headers: { Authorization: `Bearer ${token}` }
    })
    const data = res.data
    if (data.status == 'success') {
      cookies().set('attendee_id', data.attendee_id)
      cookies().set('counter_id', data.id)
    }
    if (data.status == 'error') throw new Error(data.message)
    return data
  } catch (error) {
    throw error
  }
}

export default handleCounterLogin
