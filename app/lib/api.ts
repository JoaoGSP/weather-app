async function getWeatherInfo(local?: string): Promise<any> {

  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=b8540fe971174840b9a125308231305&q=${local}&aqi=no`)
    return res.json()
  } catch (error) {
    console.log(error);

  }

}

export { getWeatherInfo }