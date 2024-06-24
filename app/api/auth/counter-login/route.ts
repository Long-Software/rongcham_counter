import { NextRequest } from 'next/server'
import {
  getAuthToken,
  resMessage,
  responseWithError,
  responseWithSuccess
} from '../../ApiResponse'
import { z } from 'zod'
import Counter from '@/Model/Counter'
import Attendee from '@/Model/Attendee'

export const POST = async (req: NextRequest) => {
  const validate = z.object({
    access_code: z.string(),
    pin: z.string()
  })
  try {
    const token = getAuthToken(req)
    if (!token) return responseWithError(resMessage.token_error)

    const data = await req.formData()
    const pin = data.get('pin') as string
    const access_code = data.get('access_code') as string
    
    validate.parse({ pin, access_code })

    const counter = await Counter.find({ where: { business_token: token, access_code } })
    const attendee = await Attendee.find({ where: { business_token: token, pin } })

    if (!counter || !attendee) return responseWithError()

    return responseWithSuccess(resMessage.fetch_success, {
      attendee_id: attendee.id,
      counter_id: counter.id
    })
  } catch (error) {
    return responseWithError()
  }
}
