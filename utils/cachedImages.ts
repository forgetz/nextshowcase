import fs from 'fs';
import path from 'path';

let cachedResults;

export default async function getResults() {
  if (!cachedResults) {
    // Read images from the /public/images directory
    const imagesDirectory = path.join(process.cwd(), 'public', 'images');
    const filenames = fs.readdirSync(imagesDirectory);

    // Map filenames to an array of image objects
    const fetchedResults = filenames.map((filename) => ({
      public_id: filename, // Remove file extension
      format: '.png', // Get file format
      // Add other properties if needed (e.g., height, width)
    }));

    cachedResults = fetchedResults;
  }

  return cachedResults;
}
