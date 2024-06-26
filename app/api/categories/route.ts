'use server'
import { getAuthToken, resMessage, resWithError, resWithSuccess } from '../ApiResponse'
import Category from '@/Model/Category'
import { categorySchema } from '@/utils/schema'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
  const token = getAuthToken(req)
  if (!token) return resWithError(resMessage.token_error)

  const categories = await Category.all({ where: { business_token: token } })
  return resWithSuccess(resMessage.fetch_success, categories)
}

export const POST = async (req: NextRequest) => {
  const token = getAuthToken(req)
  if (!token) return resWithError(resMessage.token_error)

  const data = await req.formData()
  const category_data = {
    acronym: data.get('acronym') as string,
    name: data.get('name') as string
  }
  if (!categorySchema.safeParse(category_data).success)
    return resWithError(resMessage.missing_data)

  const cat = await Category.create({ ...category_data, business_token: token })
  return resWithSuccess(resMessage.create_success, cat)
}
