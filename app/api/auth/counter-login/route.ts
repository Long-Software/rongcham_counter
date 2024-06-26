import { NextRequest } from 'next/server'
import { getAuthToken, resMessage, resWithError, resWithSuccess } from '../../ApiResponse'
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
    if (!token) return resWithError(resMessage.token_error)

    const data = await req.formData()
    const pin = data.get('pin') as string
    const access_code = data.get('access_code') as string

    validate.parse({ access_code, pin })

    const counter = await Counter.find({ where: { business_token: token, access_code } })
    if (!counter) return resWithError()

    const attendee = await Attendee.find({
      where: { business_token: token, pin, id: counter.attendee_id }
    })
    if (!attendee) return resWithError()

    return resWithSuccess(resMessage.fetch_success, counter)
  } catch (error) {
    return resWithError()
  }
}
