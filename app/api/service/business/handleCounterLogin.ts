'use server'

import { cookies } from 'next/headers'
import { apiPost } from '../../api'

const handleCounterLogin = async (token: string, access_code: string, pin: string) => {
  const form = new FormData()
  form.append('access_code', access_code)
  form.append('pin', pin)
  const res = await apiPost.post(`/auth/counter-login`, form, {
    headers: { Authorization: `Bearer ${token}` }
  })
  console.log(res.data)
  // console.log( res.data.attendee_id,res.data.counter_id )
  if (res.data.status == 'success') {
    cookies().set('attendee_id', res.data.data.attendee_id)
    cookies().set('counter_id', res.data.data.counter_id)
  }
  return res.data
}

export default handleCounterLogin
