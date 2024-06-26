import { NextRequest } from 'next/server'
import { getAuthToken, resMessage, resWithError, resWithSuccess } from '../../ApiResponse'
import { z } from 'zod'
import Counter from '@/Model/Counter'
import Queue from '@/Model/Queue'
import QueueHistory from '@/Model/QueueHistory'

export const POST = async (req: NextRequest) => {
  try {
    const token = getAuthToken(req)
    if (!token) return resWithError(resMessage.token_error)

    const data = await req.formData()
    const counter_id = Number(data.get('counter_id'))

    const counter = await Counter.find({ where: { id: counter_id } })
    if (!counter) return resWithError()

    const { main_category_id, secondary_category_id } = counter

    // updating previous queue for counter
    const lastQueueHistory = await QueueHistory.last({
      where: { counter_id: counter_id, status: 'serve' as QueueStatus }
    })
    if (lastQueueHistory) {
      await QueueHistory.update(
        { id: lastQueueHistory.id },
        { status: 'done' as QueueStatus }
      )
      await Queue.update({ id: lastQueueHistory.queue_id }, { end_time: new Date() })
    }

    // getting next queue for counter
    const queue = await Queue.find({
      where: {
        category_id: { in: [main_category_id, secondary_category_id] },
        business_token: token,
        start_time: null
      }
    })
    if (!queue) return resWithError()

    const queueHistory = await QueueHistory.create({
      attendee_id: counter.attendee_id,
      business_token: token,
      counter_id: counter_id,
      queue_id: queue.id,
      status: 'serve' as QueueStatus
    })

    Queue.update({ id: queue.id }, { start_time: new Date() })

    return resWithSuccess(resMessage.create_success, queueHistory)
  } catch (error) {
    return resWithError()
  }
}
