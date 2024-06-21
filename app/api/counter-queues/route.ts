import { NextRequest } from 'next/server'
import QueueHistory from '@/Model/QueueHistory'
import { responseWithError, responseWithSuccess } from '../ApiResponse'
import Counter from '@/Model/Counter'
import Queue from '@/Model/Queue'
import Category from '@/Model/Category'

export const GET = async (req: NextRequest) => {
  const token = req.nextUrl.searchParams.get('token') ?? ''
  const status = req.nextUrl.searchParams.get('status') ?? ''

  const counters = await Counter.all({
    where: { business_token: token },
    select: { attendee_id: true, counter_number: true, id: true }
  })

  if (counters) {
    const queue_h = await QueueHistory.all({
      where: { business_token: token, status: status },
      select: { queue_id: true, attendee_id: true, counter_id: true }
    })
    const queues = await Queue.all({
      where: {
        id: {
          in: queue_h.map(queue => queue.queue_id)
        }
      },
      select: { id: true, number: true, category_id: true }
    })
    const categories = await Category.all({
      where: { business_token: token },
      select: { id: true, acronym: true }
    })

    // generate queue name
    const queue_names = queues.map(queue => {
      const name =
        categories.find(cat => cat.id == queue.category_id)?.acronym +
        queue.number.toString()
      return {
        id: queue.id,
        name: name,
        category_id: queue.category_id
      }
    })

    const data = counters.map(counter => {
      const counter_q = queue_h.find(queue => queue.counter_id == counter.id)
      return {
        id: counter.id,
        counter_number: counter.counter_number,
        queue_name: queue_names.find(queue => queue.id == counter_q?.queue_id)?.name
      }
    })
    return responseWithSuccess('fetch successfully', data)
  }
  return responseWithError()
}
