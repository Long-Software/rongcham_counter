'use server'
import { apiPost } from '../../api'
import { headers } from 'next/headers'

const handleBusinessLogin = async (email: string) => {
  const form = new FormData()
  const redirect_to = `${headers().get('origin')}/auth/confirm`
  form.append('email', email)
  const res = await apiPost.post(
    `/counters/auth/business-login?redirect_to=${redirect_to}`,
    form
  )
}

export default handleBusinessLogin
