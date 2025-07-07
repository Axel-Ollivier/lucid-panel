export interface Coordinates {
  lat: number
  lon: number
  name: string
}

export interface CurrentWeather {
  temperature: number
  code: number
}

export async function getCoordsByCity(city: string): Promise<Coordinates | null> {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
  )
  if (!res.ok) return null
  const data = await res.json()
  if (!data.results || !data.results.length) return null
  const result = data.results[0]
  return { lat: result.latitude, lon: result.longitude, name: result.name }
}

export async function getCurrentWeather(lat: number, lon: number): Promise<CurrentWeather> {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  )
  if (!res.ok) throw new Error('weather fetch failed')
  const data = await res.json()
  return {
    temperature: data.current_weather.temperature,
    code: data.current_weather.weathercode,
  }
}
