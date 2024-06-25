export default function WeatherIcon({ iconNumber, alt }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/weather-icons/${iconNumber}.png`}
      alt={alt}
      draggable={false}
    />
  );
}
