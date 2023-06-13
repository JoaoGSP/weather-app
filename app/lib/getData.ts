import { ApiData } from './types/ApiData';

async function getWeatherInfo(local?: string): Promise<ApiData> {
  const apiKey = process.env.API_KEY;
  console.log(apiKey);

  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${local}&aqi=no`
  );
  if (!res.ok) {
    const errorRes = { status: 400, message: 'Failed to fetch data!' };
    return errorRes;
  }
  return res.json();
}

export { getWeatherInfo };
