'use server'
import { auth, responseWithError, responseWithSuccess } from '../ApiResponse'
import Category from '@/Model/Category'
import { categorySchema } from '@/utils/schema'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
  try {
    const token = auth(req)
    if (!token) return responseWithError('missing token')
    const categories = await Category.all({ where: { business_token: token } })
    return responseWithSuccess('fetch successfully', categories)
  } catch (error) {
    return responseWithError()
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const token = auth(req)
    if (!token) return responseWithError('missing token')
    const data = await req.formData()
    const acronym = data.get('acronym') as string
    const name = data.get('name') as string
    if (!categorySchema.safeParse({ acronym, name }).success)
      return responseWithError('missing data')
    const cat = await Category.create({ acronym, name, business_token: token })
    return responseWithSuccess('create successfully', cat)
  } catch (error) {
    return responseWithError()
  }
}
