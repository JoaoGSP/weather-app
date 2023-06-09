async function getWeatherInfo(local?: string): Promise<any> {
  let localForQuery: string | undefined = 'brasilia'
  local !== ',' ? localForQuery = local : ''
  const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=7647ae19db23411c851131213230906&q=${localForQuery}&aqi=no`)
  if (!res.ok) {
    console.log('Failed to fetch!!');
  }
  return res.json()
}

export { getWeatherInfo }