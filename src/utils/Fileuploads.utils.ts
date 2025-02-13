import { put } from '@vercel/blob';
import * as dotenv from 'dotenv';

dotenv.config(); 

export async function uploadToVercelBlob(file: Express.Multer.File) {
  try {
    const blob = await put(file.originalname, file.buffer, {
      access: 'public', 
      token: process.env.BLOB_READ_WRITE_TOKEN, 
    });

    return blob.url; 
  } catch (error) {
    throw new Error('File upload failed: ' + error.message);
  }
}
