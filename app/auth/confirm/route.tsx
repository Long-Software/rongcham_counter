import { createClient } from '@/utils/supabase/server'
import { EmailOtpType } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const redirectTo = req.nextUrl.clone()
  const searchParams = redirectTo.searchParams

  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType||null
  const email = searchParams.get('email')
  // const type = 'magiclink' as EmailOtpType

  // const next = searchParams.get('next') ?? '/'

  // redirectTo.pathname = next
  // redirectTo.searchParams.delete('token_hash')
  // redirectTo.searchParams.delete('type')

  // const code = searchParams.get('code')

  // if (code) {
  //   const supabase = createClient()
  //   const { error } = await supabase.auth.exchangeCodeForSession(code)
  //   if (error) {
  //     console.error('Error exchanging code for session:', error)
  //   }
  // }
  // return NextResponse.rewrite('/auth/counter')

  console.log('token_hash: ', token_hash, '\ntype: ', type, '\nemail: ', email)
  if (token_hash && type && email) {
    const supabase = createClient()

    const { error } = await supabase.auth.verifyOtp({
      // email,
      type,
      token_hash
    })
  }
  //   console.log(error)
  //   if (!error) {
  //     redirectTo.searchParams.delete('next')
  //     return NextResponse.redirect(redirectTo)
  //   }
  // }
  redirectTo.pathname = '/auth/counter'
  return NextResponse.redirect(redirectTo)
}
