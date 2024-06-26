import { getAuthToken, resMessage, resWithError, resWithSuccess } from '../../ApiResponse'
import Category from '@/Model/Category'
import { categorySchema, tokenSchema } from '@/utils/schema'
import { NextRequest } from 'next/server'

interface Params {
  params: { id: number }
}

export const GET = async (req: NextRequest, { params }: Params) => {
  const token = getAuthToken(req)
  if (!token) return resWithError(resMessage.token_error)

  const category = await Category.find({
    where: { id: params.id, business_token: token }
  })
  return resWithSuccess(resMessage.fetch_success, category)
}

export const POST = async (req: NextRequest, { params }: Params) => {
  try {
    const token = getAuthToken(req)
    if (!token) return resWithError(resMessage.token_error)

    const data = await req.formData()
    const acronym = data.get('acronym') as string
    const name = data.get('name') as string

    if (!categorySchema.safeParse({ acronym, name }).success)
      return resWithError(resMessage.missing_data)

    const cat = await Category.update(
      { id: params.id, business_token: token },
      { acronym, name }
    )
    return resWithSuccess(resMessage.update_success, cat)
  } catch (error) {
    return resWithError()
  }
}

export const DELETE = async (req: NextRequest, { params }: Params) => {
  try {
    const token = getAuthToken(req)
    if (!token) return resWithError(resMessage.token_error)

    const cat = await Category.destroy(params.id, token)
    return resWithSuccess(resMessage.delete_success, cat)
  } catch (error) {
    return resWithError()
  }
}
