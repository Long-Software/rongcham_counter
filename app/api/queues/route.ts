'use server'
import Category from '@/Model/Category'
import { responseWithError, responseWithSuccess } from '../ApiResponse'
import Queue from '@/Model/Queue'
import { NextRequest } from 'next/server'
import { z } from 'zod'

export const GET = async (req: NextRequest) => {
  const token = req.nextUrl.searchParams.get('token') ?? ''
  const queues = await Queue.all({
    where: { business_token: token },
    select: { id: true, category_id: true, number: true }
  })

  if (queues) {
    const categories = await Category.all({
      where: { business_token: token },
      select: { id: true, acronym: true }
    })
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
  return responseWithSuccess('fetch successfully', [])
}

export const POST = async (req: NextRequest) => {
  const validate = z.object({
    category_id: z.string()
  })
  try {
    const data = await req.formData()
    const token = req.nextUrl.searchParams.get('token') ?? ''

    validate.parse({ category_id: data.get('category_id') })

    const lastQueue = await Queue.last(Number(data.get('category_id')))

    const queue = await Queue.create({
      category_id: Number(data.get('category_id')),
      business_token: token,
      number: lastQueue ? lastQueue.number + 1 : 1
    })
    return responseWithSuccess('queue created', queue)
  } catch (error) {
    return responseWithError('error', error)
  }
}
