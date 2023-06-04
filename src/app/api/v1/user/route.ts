import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const res = await request.json();
  //   console.log(res.hello);

  return NextResponse.json(res);
}
