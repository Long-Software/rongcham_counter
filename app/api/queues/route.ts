'use server'
import Category from '@/Model/Category'
import { responseWithError, responseWithSuccess } from '../ApiResponse'
import Queue from '@/Model/Queue'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
  const token = req.nextUrl.searchParams.get('token') ?? ''

  const queues = await Queue.all({
    where: { business_token: token },
    select: { id: true, category_id: true, number: true }
  })
  const categories = await Category.all({
    where: { business_token: token },
    select: { id: true, acronym: true }
  })

  if (queues) {
    const data = queues.map(queue => {
      const prefix = categories.find(cat => cat.id == queue.category_id)?.acronym
      return {
        id: queue.id,
        name: prefix + queue.number.toString(),
        category_id: queue.category_id
      }
    })
    return responseWithSuccess('fetch successfully', data)
  }
  return responseWithError('unauthorize', null)
}

export const POST = async (req: NextRequest) => {
  const data = await req.formData()

  const token = req.nextUrl.searchParams.get('token') ?? ''
  if (!data.get('category_id')) throw new Error('missing data')
  const lastQueue = await Queue.last(Number(data.get('category_id')))

  await Queue.create({
    category_id: Number(data.get('category_id')),
    business_token: token,
    number: lastQueue ? lastQueue.number + 1 : 1
  })
}
