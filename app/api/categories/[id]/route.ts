import { responseWithError, responseWithSuccess } from '../../ApiResponse'
import Category from '@/Model/Category'
import { NextRequest } from 'next/server'
export const GET = async (req: NextRequest, context: { params: { id: string } }) => {
  const id = context.params.id
  const token = req.nextUrl.searchParams.get('token') ?? ''
  const cat = await Category.find({ where: { id: Number(id), business_token: token } })
  if (!cat) return responseWithError('category not found', cat, 404)
  return responseWithSuccess('fetch successfully', cat)
}
