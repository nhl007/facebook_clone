import { NextRequest, NextResponse } from 'next/server';

// export { default } from 'next-auth/middleware';

export async function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: '/api',
};
