'use server'
import { Category, Prisma } from '@prisma/client'
import { api } from '../api'
import { auth } from '../ApiResponse'

export const getCategory = async (business_token: string): Promise<Category[]> => {
  try {
    const res = await api.get('/categories', { headers: { user_id: business_token } })
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data.data
  } catch (error) {
    throw error
  }
}
