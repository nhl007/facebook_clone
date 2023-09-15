import { NextResponse } from 'next/server';

import bcrypt from 'bcrypt';
import User from '@/models/user';
import { connectToDB } from '@/utils/connectToDb';

type body = {
  name: string;
  email: string;
  password: string;
};

export async function POST(request: Request) {
  try {
    const body: body = await request.json();

    const { name, email, password } = body;

    if (!name || !email || !password) {
      return new NextResponse('Missing Fields', { status: 400 });
    }

    await connectToDB();

    const userExists = await User.findOne({ email: email });

    if (userExists) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      email: email,
      username: name?.replace(' ', '').toLowerCase(),
      password: hashedPassword,
    });

    return NextResponse.json(user);
  } catch (err: any) {
    return NextResponse.json(err.message, { status: 400 });
  }
}
