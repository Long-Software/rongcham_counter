'use server'
import { resWithError, resWithSuccess } from '../../../ApiResponse'
import Category from '@/Model/Category'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const token = params.id
    const categories = await Category.all({
      where: { business_token: token }
    })
    return resWithSuccess('fetch successfully', categories, 200)
  } catch (error) {
    return resWithError('unauthorize', error)
  }
}
