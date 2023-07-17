import { getAuthSession } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const session = await getAuthSession();
  if (session?.user) {
    return new NextResponse(
      JSON.stringify({
        Project: 'SrjBook Api',
        Owner: 'Nihal',
        Version: '1.0.0',
        session: session?.user,
      })
    );
  }

  return new NextResponse(
    JSON.stringify({
      Project: 'SrjBook Api',
      Owner: 'Nihal',
      Version: '1.0.0',
      message: "you don't have permission to access the api !",
    })
  );
}
