import { resWithError, resWithSuccess } from '../ApiResponse'
import Counter from '@/Model/Counter'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
  const token = req.nextUrl.searchParams.get('token') ?? ''

  const counters = await Counter.all({
    where: { business_token: token }
  })
  if (counters) {
    return resWithSuccess('fetch successfully', counters)
  }
  return resWithError()
}
