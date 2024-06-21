import { createClient } from '@/utils/supabase/server'
import { EmailOtpType } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const redirectTo = req.nextUrl.clone()
  const searchParams = redirectTo.searchParams

  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType
  if (token_hash && type) {
    const supabase = createClient()
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash
    })
    if(error) {
      
    }
  }
  redirectTo.pathname = '/auth/counter'
  return NextResponse.redirect(redirectTo)
}
