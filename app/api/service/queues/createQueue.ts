'use server'
import { apiPost } from '../../api'

export const createQueue = async (
  token: string,
  category_id: number
): Promise<ApiResponse> => {
  try {
    const form = new FormData()
    form.append('category_id', category_id.toString())
    const res = await apiPost.post('/queues', form, {
      headers: { Authorization: `Bearer ${token}` }
    })

    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data
  } catch (error) {
    throw error
  }
}
