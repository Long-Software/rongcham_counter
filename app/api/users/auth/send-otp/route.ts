import { resWithError, resWithSuccess } from '@/app/api/ApiResponse'
import { createClient } from '@/utils/supabase/server'
import { NextRequest } from 'next/server'
import z from 'zod'

export const POST = async (req: NextRequest) => {
  const Phone = z.object({ phone: z.string() })
  const data = await req.formData()
  const phone = data.get('phone_number') as string
  try {
    Phone.parse({ phone })
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithOtp({
      phone: phone
    })
    if (error) throw error
    return resWithSuccess('sending signInWithOtp', phone)
  } catch (error) {
    return resWithError('', error)
  }
}
