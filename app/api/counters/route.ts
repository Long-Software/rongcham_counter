import { responseWithError, responseWithSuccess } from '../ApiResponse'
import Counter from '@/Model/Counter'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const token = req.nextUrl.searchParams.get('token') ?? ''

  const counters = await Counter.all({
    where: { business_token: token }
  })
  if (counters) {
    return responseWithSuccess('fetch successfully', counters, 200)
  }
  return responseWithError('unauthorize', null)
}
