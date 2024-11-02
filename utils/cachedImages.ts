import cloudinary from "./cloudinary";

let cachedResults;

export default async function getResults() {
  if (!cachedResults) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/images`);
    const fetchedResults = await response.json();

    cachedResults = fetchedResults;
  }

  return cachedResults;
}
