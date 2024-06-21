import { auth, responseWithError, responseWithSuccess } from '../../ApiResponse'
import Category from '@/Model/Category'
import { categorySchema, tokenSchema } from '@/utils/schema'
import { NextRequest } from 'next/server'

interface Params {
  params: { id: number }
}

export const GET = async (req: NextRequest, { params }: Params) => {
  try {
    const token = auth(req)
    if (!tokenSchema.safeParse(token).success) return responseWithError('missing token')
    const cat = await Category.find({ where: { id: params.id, business_token: token } })
    return responseWithSuccess('fetch successfully', cat)
  } catch (error) {
    return responseWithError()
  }
}

export const POST = async (req: NextRequest, { params }: Params) => {
  try {
    const token = auth(req)
    if (!tokenSchema.safeParse(token).success) return responseWithError('missing token')
    const data = await req.formData()
    const acronym = data.get('acronym') as string
    const name = data.get('name') as string
    if (!categorySchema.safeParse({ acronym, name }).success)
      return responseWithError('missing data')
    const cat = await Category.update(params.id, token, { acronym, name })
    return responseWithSuccess('update successfully', cat)
  } catch (error) {
    return responseWithError()
  }
}

export const DELETE = async (req: NextRequest, { params }: Params) => {
  try {
    const token = auth(req)
    if (!tokenSchema.safeParse(token).success) return responseWithError('missing token')
    const cat = await Category.destroy(params.id, token)
    return responseWithSuccess('delete successfully', cat)
  } catch (error) {
    return responseWithError()
  }
}
