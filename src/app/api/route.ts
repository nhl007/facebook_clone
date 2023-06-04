import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return new NextResponse(
    JSON.stringify({
      Project: 'SrjBook Api',
      Owner: 'Nihal',
      Version: '1.0.0',
    })
  );
}
