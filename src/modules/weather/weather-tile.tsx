import { MetaWeatherConsolidated } from "./weather.types";

interface WeatherTileProps {
  weather: MetaWeatherConsolidated,
  title: string;
}

export const WeatherTile: React.FC<WeatherTileProps> = ({ title, weather }) => {
  return (
    <article key={weather.id} style={{ textAlign: "center" }}>
      <h3>
        {title}
        <div>
          <small>{weather.applicable_date}</small>
        </div>
      </h3>


      <img src={`https://www.metaweather.com/static/img/weather/png/64/${weather.weather_state_abbr}.png `} alt={weather.weather_state_name} />
    </article>
  );
}
