import {
  getAuthToken,
  resMessage,
  responseWithError,
  responseWithSuccess
} from '../../ApiResponse'
import Category from '@/Model/Category'
import { categorySchema, tokenSchema } from '@/utils/schema'
import { NextRequest } from 'next/server'

interface Params {
  params: { id: number }
}

export const GET = async (req: NextRequest, { params }: Params) => {
  try {
    const token = getAuthToken(req)
    if (!token) return responseWithError(resMessage.token_error)

    const cat = await Category.find({ where: { id: params.id, business_token: token } })
    return responseWithSuccess(resMessage.fetch_success, cat)
  } catch (error) {
    return responseWithError()
  }
}

export const POST = async (req: NextRequest, { params }: Params) => {
  try {
    const token = getAuthToken(req)
    if (!token) return responseWithError(resMessage.token_error)

    const data = await req.formData()
    const acronym = data.get('acronym') as string
    const name = data.get('name') as string

    if (!categorySchema.safeParse({ acronym, name }).success)
      return responseWithError(resMessage.missing_data)

    const cat = await Category.update(params.id, token, { acronym, name })
    return responseWithSuccess(resMessage.update_success, cat)
  } catch (error) {
    return responseWithError()
  }
}

export const DELETE = async (req: NextRequest, { params }: Params) => {
  try {
    const token = getAuthToken(req)
    if (!token) return responseWithError(resMessage.token_error)

    const cat = await Category.destroy(params.id, token)
    return responseWithSuccess(resMessage.delete_success, cat)
  } catch (error) {
    return responseWithError()
  }
}
