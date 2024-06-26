import {
  getAuthToken,
  resMessage,
  resWithError,
  resWithSuccess
} from '../ApiResponse'
import Business from '@/Model/Business'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
  const token = getAuthToken(req)
  if (!token) return resWithError(resMessage.token_error)
  const bus = await Business.find({ where: { business_token: token } })

  if (!bus) return resWithError('not found', null, 404)
  return resWithSuccess('fetch successfully', bus)
}
