import Head from "next/head";
import "tailwindcss/tailwind.css";

export default function Home({ locations }) {
  console.log("props weather", locations);
  const conversion = (num) => {
    return (num - 273.15) * (9 / 5) + 32;
  };
  return (
    <div>
      <Head>
        <title>FSA-Weather</title>
        <meta name="keywords" content="weather, stackathon" />
      </Head>
      <h1 className="bg-gradient-to-r from-blue-200 to-green-300 flex justify-center">
        Your Weather Now
      </h1>
      <div className="flex flex-wrap content-around justify-center">
        {locations.map((city) => {
          return (
            <div className="w-2/5 p-4">
              <h1 className="font-black">City: {city.name}</h1>
              <h2 className="">Country: {city.sys.country}</h2>
              <h2 className="">
                Temperature: {conversion(city.main.temp).toFixed(0)}F
              </h2>
              <h2 className="">
                Weather Description: {city.weather[0].description}
              </h2>
              <h2 className="">Wind Speed: {city.wind.speed} m/s</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res1 = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London&appid=009077481bae4223c9e441c727d34862`
  );
  const weatherLondon = await res1.json();

  const res2 = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Manhattan&appid=009077481bae4223c9e441c727d34862`
  );
  const weatherNY = await res2.json();

  const res3 = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Miami&appid=009077481bae4223c9e441c727d34862`
  );
  const weatherMiami = await res3.json();

  const res4 = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=009077481bae4223c9e441c727d34862`
  );
  const weatherParis = await res4.json();

  const res5 = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=009077481bae4223c9e441c727d34862`
  );
  const weatherMoscow = await res5.json();

  const res6 = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=009077481bae4223c9e441c727d34862`
  );
  const weatherSydney = await res6.json();

  const res7 = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=009077481bae4223c9e441c727d34862`
  );
  const weatherToronto = await res7.json();

  const res8 = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=009077481bae4223c9e441c727d34862`
  );
  const weatherTokyo = await res8.json();

  let locations = [
    weatherLondon,
    weatherNY,
    weatherMiami,
    weatherParis,
    weatherMoscow,
    weatherSydney,
    weatherToronto,
    weatherTokyo,
  ];

  return {
    props: {
      locations,
    },
  };
};
