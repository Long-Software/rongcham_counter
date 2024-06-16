'use server'
import { Category, Prisma } from '@prisma/client'
import { api } from '../api'

export const getCategory = async (business_token: string): Promise<Category[]> => {
  try {
    
    const res = await api.get(`/categories?token=${business_token}`)
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data.data
  } catch (error) {
    throw error
  }
}
