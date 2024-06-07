import { responseWithError, responseWithSuccess } from '../ApiResponse'
import Category from '@/Model/Category'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const token = req.nextUrl.searchParams.get('token') ?? ''

  const categories = await Category.all({
    where: { business_token: token }
  })
  if (categories) {
    return responseWithSuccess( 'fetch category successfully', categories, 203)
  }
  return responseWithError('unauthorize', null)
}
