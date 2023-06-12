import { ApiData } from "./types/ApiData"


async function getWeatherInfo(local?: string): Promise<ApiData> {
  const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=7647ae19db23411c851131213230906&q=${local}&aqi=no`)
  if (!res.ok) {
    const errorRes = { status: 400, message: 'Failed to fetch data!' }
    return errorRes
  }
  return res.json()
}

export { getWeatherInfo }