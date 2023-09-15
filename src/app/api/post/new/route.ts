// import { authOptions } from '@/lib/auth';
// import Post from '@/models/posts';
// import { uploadAllImages } from '@/utils/cloudinary';
// import { getServerSession } from 'next-auth';
// import { NextRequest, NextResponse } from 'next/server';

// export async function POST(request: NextRequest) {
//   try {
//     const user = await getServerSession(authOptions);
//     console.log(user);
//     const formData = await request.formData();

//     // const postData ={
//     //   user:user_id,
//     //   type:formData. ||'public',
//     //   caption:caption,
//     //   images:ImageResponse,
//     // }

//     const postData = {};

//     for (const pair of formData.entries()) {
//       postData[pair[0]] = pair[1];
//     }

//     console.log(postData);
//     // const images = await uploadAllImages(formData);
//     // const post=await Post.create(images)
//     // return NextResponse.json(images);
//     return NextResponse.json('ok');
//   } catch (error: any) {
//     return new NextResponse(
//       JSON.stringify({ success: false, error: error.message })
//     );
//   }
// }

import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({ ok: 'ok' }, { status: 200 });
}
