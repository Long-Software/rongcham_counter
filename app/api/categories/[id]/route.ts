import { responseWithError, responseWithSuccess } from '../../ApiResponse'
import Category from '@/Model/Category'
import { NextRequest } from 'next/server'

export const GET = async (
  req: NextRequest,
  {
    params
  }: {
    params: { id: number }
  }
) => {
  const token = req.nextUrl.searchParams.get('token') ?? ''
  const cat = await Category.find({ where: { id: params.id, business_token: token } })
  if (!cat) return responseWithError('category not found', cat, 404)
  return responseWithSuccess('fetch successfully', cat)
}
