import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/session';

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  
  // --- 1. Security Headers & CORS ---
  const response = NextResponse.next();
  
  // Debug Header
  response.headers.set('x-middleware-path', path);

  // response.headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: https:; font-src 'self' data:; connect-src 'self';");
  // response.headers.set('X-Frame-Options', 'DENY');
  // response.headers.set('X-XSS-Protection', '1; mode=block');
  // response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  // response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  // response.headers.set('X-Content-Type-Options', 'nosniff');
  // response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');

  // CORS for API routes
  if (path.startsWith('/api')) {
    const origin = req.headers.get('origin') || '';
    const allowedOrigins = ['https://todayfilmmakers.com', 'http://localhost:3000'];
    
    if (allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    }
  }

  // --- 2. Block Direct Access to Sensitive Files ---
  if (path.startsWith('/data/') || (path.endsWith('.json') && !path.startsWith('/_next'))) {
    return new NextResponse(null, { status: 404 });
  }

  // --- 3. Admin Route Protection ---
  const isProtectedRoute = path.startsWith('/imadmin/dashboard') || 
                           path.startsWith('/imadmin/users') || 
                           path.startsWith('/imadmin/apps') || 
                           path.startsWith('/imadmin/settings') || 
                           path.startsWith('/imadmin/socials');
  
  const isLoginRoute = path === '/imadmin';

  if (path.startsWith('/imadmin')) {
    const cookie = req.cookies.get('session')?.value;
    const session = await decrypt(cookie);

    if (isProtectedRoute && !session?.userId) {
      return NextResponse.redirect(new URL('/imadmin', req.nextUrl));
    }

    if (isLoginRoute && session?.userId) {
      return NextResponse.redirect(new URL('/imadmin/dashboard', req.nextUrl));
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
