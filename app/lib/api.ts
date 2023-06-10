async function getWeatherInfo(local?: string): Promise<any> {
  const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=7647ae19db23411c851131213230906&q=${local}&aqi=no`)
  if (!res.ok) {
    console.log('Failed to fetch!!');
  }
  return res.json()
}

export { getWeatherInfo }