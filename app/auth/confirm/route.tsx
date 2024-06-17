import { createClient } from '@/utils/supabase/server'
import { EmailOtpType } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const redirectTo = req.nextUrl.clone()
  const searchParams = redirectTo.searchParams
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'

  redirectTo.pathname = next
  redirectTo.searchParams.delete('token_hash')
  redirectTo.searchParams.delete('type')

  // const code = searchParams.get('code')
  // if (code) {
  //   const supabase = createClient()
  //   await supabase.auth.exchangeCodeForSession(code)
  // }
  // return NextResponse.redirect('/auth/counter')

  if (token_hash && type) {
    const supabase = createClient()

    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash
    })
    if (!error) {
      redirectTo.searchParams.delete('next')
      // return NextResponse.redirect(redirectTo)
    }
  }
  redirectTo.pathname = '/error'
  return NextResponse.redirect(redirectTo)
}
