const getWeatherInfo = async (local: string): Promise<any> => {
  const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${local}&aqi=no`)
  if (!res.ok) {
    console.log('fetch failed!')
  }
  return res.json()
}

export { getWeatherInfo }