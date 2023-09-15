import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from './lib/auth';

// export { default } from 'next-auth/middleware';

export async function middleware(request: NextRequest) {
  const user = await getServerSession(authOptions);
  console.log(user);
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path',
};
