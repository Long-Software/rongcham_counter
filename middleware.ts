import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { createClient } from './utils/supabase/server'
import { cookies } from 'next/headers'

const public_route: string[] = ['/api', '/auth']

export async function middleware(req: NextRequest) {
  const isPublicRoute = public_route.some(route => {
    const regex = new RegExp(route.replace(':path*', '.*'))
    return regex.test(req.nextUrl.pathname)
  })

  if (isPublicRoute) return await updateSession(req)

  console.log('middleware active on route: ', req.nextUrl.href)
  const supabase = createClient()
  const {
    data: { user },
    error
  } = await supabase.auth.getUser()

  if (error || !user) return NextResponse.rewrite(new URL('/auth', req.url))

  if (!cookies().get('attendee_id')?.value || !cookies().get('counter_id')?.value)
    return NextResponse.rewrite(new URL('/auth/counter', req.url))
  return await updateSession(req)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
}
