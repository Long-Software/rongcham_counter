'use server'
import Category from '@/Model/Category'
import { getAuthToken, resMessage, resWithError, resWithSuccess } from '../ApiResponse'
import Queue from '@/Model/Queue'
import { NextRequest } from 'next/server'
import { z } from 'zod'

export const GET = async (req: NextRequest) => {
  const token = getAuthToken(req)
  if (!token) return resWithError(resMessage.token_error)

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

    return resWithSuccess(resMessage.fetch_success, data)
  }
  return resWithSuccess(resMessage.fetch_success, [])
}

export const POST = async (req: NextRequest) => {
  const validate = z.number()
  try {
    const token = getAuthToken(req)
    if (!token) return resWithError(resMessage.token_error)

    const data = await req.formData()
    const category_id = Number(data.get('category_id'))

    validate.parse(category_id)
    const lastQueue = await Queue.last(category_id)

    const queue = await Queue.create({
      category_id: category_id,
      business_token: token,
      number: lastQueue ? lastQueue.number + 1 : 1
    })

    return resWithSuccess('queue created', queue)
  } catch (error) {
    return resWithError()
  }
}
