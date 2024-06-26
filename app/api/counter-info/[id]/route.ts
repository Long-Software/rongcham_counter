import { NextRequest } from 'next/server'
import { getAuthToken, resMessage, resWithError, resWithSuccess } from '../../ApiResponse'
import Counter from '@/Model/Counter'
import Business from '@/Model/Business'
import Attendee from '@/Model/Attendee'
interface Params {
  params: { id: string }
}
export const GET = async (req: NextRequest, { params }: Params) => {
  try {
    const token = getAuthToken(req)
    if (!token) return resWithError(resMessage.token_error)
    const counter = await Counter.find({
      where: { business_token: token, id: +params.id }
    })
    const business = await Business.find({ where: { business_token: token } })
    if (!counter || !business) return resWithError(resMessage.fetch_error)

    const attendee = await Attendee.find({ where: { id: counter.attendee_id } })
    if (!attendee) return resWithError(resMessage.fetch_error)
    const data: CounterInfo = {
      name: business.name,
      attendee_name: attendee.name,
      counter_number: counter.counter_number,
      finished_queue: 1,
      main_category_id: counter.main_category_id,
      secondary_category_id: counter.secondary_category_id
    }
    return resWithSuccess(resMessage.fetch_success, data)
  } catch (error) {
    return resWithError()
  }
}
