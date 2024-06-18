import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { createClient } from './utils/supabase/server'
import { getBusiness } from './app/api/service/business/getBusiness'
import axios from 'axios'

// const auth_routes = ['/counter', '/shop', '/queue']
export async function middleware(req: NextRequest) {
  const supabase = createClient()
  const {
    data: { user },
    error
  } = await supabase.auth.getUser()

  if (error || !user) return NextResponse.rewrite(new URL('/auth', req.url))

  req.headers.set('user_id', user.id)
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
    '/((?!_next/static|_next/image|api|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    '/counter',
    '/shop',
    '/queue'
  ]
}
