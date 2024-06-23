'use server'
import { Business } from '@prisma/client'
import { api } from '../../api'

export const getBusiness = async (token: string): Promise<Business> => {
  try {
    const res = await api.get('/businesses', {
      headers: { Authorization: `Bearer ${token}` }
    })
    if (res.data.status == 'error') throw new Error(res.data.message)
    return res.data.data
  } catch (error) {
    throw error
  }
}
