import {
  getAuthToken,
  resMessage,
  responseWithError,
  responseWithSuccess
} from '../ApiResponse'
import Business from '@/Model/Business'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
  const token = getAuthToken(req)
  if (!token) return responseWithError(resMessage.token_error)
  const bus = await Business.find({ where: { business_token: token } })

  if (!bus) return responseWithError('not found', null, 404)
  return responseWithSuccess('fetch successfully', bus)
}
