'use server'
import { responseWithError, responseWithSuccess } from '../ApiResponse'
import Queue from '@/Model/Queue'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
  const token = req.nextUrl.searchParams.get('token') ?? ''

  const queues = await Queue.all({
    where: { business_token: token }
  })
  if (queues) {
    return responseWithSuccess('fetch category successfully', queues)
  }
  return responseWithError('unauthorize', null)
}

export const POST = async (req: NextRequest) => {
  const data = await req.formData()

  const token = req.nextUrl.searchParams.get('token') ?? ''
  if (!data.get('category_id')) throw new Error('Category was not found')
  const lastQueue = await Queue.last(Number(data.get('category_id')))

  await Queue.create({
    category_id: Number(data.get('category_id')),
    business_token: token,
    number: lastQueue ? lastQueue.number + 1 : 1
  })
}
