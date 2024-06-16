import { responseWithError, responseWithSuccess } from '../../ApiResponse'
import Business from '@/Model/Business'
import { NextRequest } from 'next/server'

export const GET = async (
  req: NextRequest,
  {
    params
  }: {
    params: { id: string }
  }
) => {
  const bus = await Business.find({ where: { business_token: params.id } })
  if (!bus) return responseWithError('not found', bus, 404)
  return responseWithSuccess('fetch successfully', bus)
}
