import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const imagesDirectory = path.join(process.cwd(), 'public/images');

  // Read the files in the directory
  fs.readdir(imagesDirectory, (err, filenames) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load images' });
    }

    // Create an array of image objects
    const images = filenames.map((filename, index) => {
      const public_id = filename // Assuming filename is in the format public_id.format
      const format = "png"
      return {
        id: index,
        public_id,
        format,
        height: 512, // Set a default height or retrieve it if available
        width: 512,  // Set a default width or retrieve it if available
      };
    });

    res.status(200).json(images);
  });
}