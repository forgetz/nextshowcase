import fs from 'fs';
import path from 'path';

let cachedResults;

export default async function getResults() {
  if (!cachedResults) {
    // Read images from the /public/images directory
    const imagesDirectory = path.join(process.cwd(), 'public/images');
    const filenames = fs.readdirSync(imagesDirectory);

    // Map filenames to an array of image objects
    const fetchedResults = filenames.map((filename) => ({
      public_id: filename,
      format: '.png', 
      height: '512',
      width: '512'
    }));

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

    cachedResults = images;
  }

  return cachedResults;
}
