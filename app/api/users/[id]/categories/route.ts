'use server'
import { responseWithError, responseWithSuccess } from '../../../ApiResponse'
import Category from '@/Model/Category'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const token = params.id
    const categories = await Category.all({
      where: { business_token: token }
    })
    return responseWithSuccess('fetch successfully', categories, 200)
  } catch (error) {
    return responseWithError('unauthorize', error)
  }
}
