import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { createClient } from './utils/supabase/server'
import { cookies } from 'next/headers'

// const auth_routes = ['/counter', '/shop', '/queue']
export async function middleware(req: NextRequest) {
  // req.nextUrl.
  const public_route: string[] = ['/api', '/auth']
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
  // const attendee = cookies().get('attendee_id')
  // const counter = cookies().get('counter_id')
  // if (!attendee || !counter)
  //   return NextResponse.rewrite(new URL('/auth/counter', req.url))
  return await updateSession(req)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
}
