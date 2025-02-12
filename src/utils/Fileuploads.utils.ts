import { put } from '@vercel/blob';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables

export async function uploadToVercelBlob(file: Express.Multer.File) {
  try {
    const blob = await put(file.originalname, file.buffer, {
      access: 'public', // Make file publicly accessible
      token: process.env.BLOB_READ_WRITE_TOKEN, // Use Vercel token
    });

    return blob.url; // Return the uploaded file URL
  } catch (error) {
    throw new Error('File upload failed: ' + error.message);
  }
}
