import { responseWithError, responseWithSuccess } from '@/app/api/ApiResponse'
import { createClient } from '@/utils/supabase/server'
import { NextRequest } from 'next/server'
import { z } from 'zod'

export const POST = async (req: NextRequest) => {
  const validate = z.object({
    email: z.string().email()
  })
  try {
    const data = await req.formData()
    const email = data.get('email') as string
    validate.parse({ email })
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${req.nextUrl.origin}/auth/callback` }
    })
    if (error) throw new Error(error.message)
    return responseWithSuccess('sending otp', null)
  } catch (error) {
    return responseWithError('error', error)
  }
}
