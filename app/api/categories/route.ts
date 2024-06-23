'use server'
import {
  getAuthToken,
  resMessage,
  responseWithError,
  responseWithSuccess
} from '../ApiResponse'
import Category from '@/Model/Category'
import { categorySchema } from '@/utils/schema'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
  try {
    const token = getAuthToken(req)
    if (!token) return responseWithError(resMessage.token_error)

    const categories = await Category.all({ where: { business_token: token } })
    return responseWithSuccess(resMessage.fetch_success, categories)
  } catch (error) {
    return responseWithError()
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const token = getAuthToken(req)
    if (!token) return responseWithError(resMessage.token_error)

    const data = await req.formData()
    const category_data = {
      acronym: data.get('acronym') as string,
      name: data.get('name') as string
    }
    if (!categorySchema.safeParse(category_data).success)
      return responseWithError(resMessage.missing_data)

    const cat = await Category.create({ ...category_data, business_token: token })
    return responseWithSuccess(resMessage.create_success, cat)
  } catch (error) {
    return responseWithError()
  }
}
