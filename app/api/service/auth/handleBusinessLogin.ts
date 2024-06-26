'use server'
import { apiPost } from '../../api'
import { headers } from 'next/headers'

const handleBusinessLogin = async (email: string): Promise<ApiResponse> => {
  try {
    const form = new FormData()
    const redirect_to = `${headers().get('origin')}/api/auth/confirm`
    form.append('email', email)
    const res = await apiPost.post(
      `/auth/business-login?redirect_to=${redirect_to}`,
      form
    )
    const data = res.data
    if (data.status == 'error') throw new Error(data.message)
    return data
  } catch (error) {
    throw error
  }
}

export default handleBusinessLogin
