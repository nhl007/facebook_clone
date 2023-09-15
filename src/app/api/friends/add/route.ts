import { connectToDB } from '@/utils/connectToDb';
import { NextResponse } from 'next/server';
import User, { IUser } from '@/models/user';
import { HydratedDocument, HydratedDocumentFromSchema } from 'mongoose';

export async function POST(request: Request) {
  connectToDB();
  const { id, friendId } = await request.json();

  const user: HydratedDocument<IUser> | null = await User.findByIdAndUpdate(
    id,
    {
      $addToSet: { friends: { userId: friendId } },
    },
    { new: true, runValidators: true, useFindAndModify: false }
  );

  return NextResponse.json(user, { status: 200 });
}
