import { WeatherService } from '@weather/weather.service';

export default async (req, res) => {
  const woeid = 753692; // Barcelona
  const data = await WeatherService.get(woeid);

  res.status(200).json(data)
}
