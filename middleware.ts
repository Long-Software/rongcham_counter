import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { createClient } from './utils/supabase/server'
import { getBusiness } from './app/api/service/business/getBusiness'
const auth_routes = ['/counter', '/shop', '/queue']
export async function middleware(req: NextRequest) {
  // const res = await getBusiness(user.id)

  // if (!business && auth_routes.includes(req.url)) {
  //   return NextResponse.rewrite(new URL('/auth', req.url))
  // }
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
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    '/counter',
    '/shop',
    '/queue'
  ]
}
