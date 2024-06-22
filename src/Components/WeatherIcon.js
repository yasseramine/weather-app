export default function WeatherIcon({ iconNumber }) {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/weather-icons/${iconNumber}.png`}
      draggable={false}
    />
  );
}
