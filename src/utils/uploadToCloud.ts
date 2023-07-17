export async function uploadToCloudinary(file: FormData) {
  const url = process.env.CLOUDINARY_API_URL;

  await fetch(url as string, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: file,
  })
    .then((response) => response.json())
    .then((url) => console.log(url))
    .catch((err) => console.log(err));
}
