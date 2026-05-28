export default async function handler(req, res) {
  const PLACE_ID = process.env.PLACE_ID;
  const API_KEY = process.env.GOOGLE_API_KEY;

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${PLACE_ID}` +
    `&fields=name,rating,reviews` +
    `&key=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  res.status(200).json({
    reviews: data?.result?.reviews || []
  });
}
