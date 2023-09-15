import { NextResponse } from 'next/server';

type imageObj = {
  key?: string;
  url?: string;
};

type imageInfo = {
  key: string;
  url: string;
};

export const uploadToCloudinary = async (
  file: FormDataEntryValue
): Promise<imageInfo | NextResponse> => {
  const apiKey = process.env.CLOUDINARY_KEY as string;
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME as string;
  const formData = new FormData();
  formData.append('api_key', apiKey);
  formData.append('upload_preset', 'fb_app');
  formData.append('file', file);

  const url = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: 'POST',
      body: formData,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      return { url: data.secure_url, key: data.asset_id };
    })
    .catch((err) => {
      return NextResponse.json({ success: false });
    });

  return url;
};

export async function uploadAllImages(formData: FormData): Promise<imageObj[]> {
  const images: imageObj[] = [];

  const uploadPromises: Promise<imageInfo>[] = [];

  formData.forEach((entry) => {
    const promise = uploadToCloudinary(entry);
    // @ts-ignore
    uploadPromises.push(promise);
  });

  for (let i = 0; i < uploadPromises.length; i++) {
    const { url, key } = await uploadPromises[i];
    images.push({ key: key, url: url });
  }

  return images;
}
