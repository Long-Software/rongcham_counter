'use server'
import { resWithError, resWithSuccess } from '@/app/api/ApiResponse'
import { createClient } from '@/utils/supabase/server'
import { NextRequest } from 'next/server'
import { z } from 'zod'

export const POST = async (req: NextRequest) => {
  const validate = z.object({
    email: z.string().email()
  })
  try {
    const data = await req.formData()
    const redirect_to = req.nextUrl.searchParams.get('redirect_to') ?? ''
    const email = data.get('email') as string
    validate.parse({ email })
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirect_to }
    })
    if (error) throw new Error(error.message)
    return resWithSuccess('sending magic link', null)
  } catch (error) {
    return resWithError()
  }
}
