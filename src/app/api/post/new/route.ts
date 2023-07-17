// import { uploadToCloudinary } from '@/utils/uploadToCloud';
import { createWriteStream } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { join } from 'path';

type newPostMeta = {
  caption: string;
  image: string;
};

export async function POST(request: NextRequest) {
  const formData = await request.formData();

  const file = formData.get('file');
  // const stream = file?.toString();

  console.log(file?.stream());
  // Generate a unique filename or use the original filename
  // if (!file) {
  //   return new NextResponse();
  // }
  // const fileName = `${Date.now()}_`;

  //   // Define the path where the file will be saved
  //   const filePath = join(process.cwd(), 'uploads', fileName);

  //   // Create a writable stream and pipe the file data to it
  //   const writeStream = createWriteStream(filePath);
  //   await new Promise((resolve, reject) => {
  //     file..pipe(writeStream);
  //     file.data.on('end', resolve);
  //     writeStream.on('error', reject);
  //   });

  //   // Respond with the file path
  //   res.status(200).json({ filePath });
  // } catch (error) {
  //   console.error('An error occurred while uploading the file:', error);
  //   res.status(500).json({ message: 'File upload failed' });
  // }

  return new NextResponse(JSON.stringify({ success: true }));
}
