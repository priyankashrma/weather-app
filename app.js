const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=451a934c5c6252a63d2eb33e8b6e589b&query=37.8267,-122.4233&units=f";

request({ url, json: true }, (error, response) => {
  console.log(
    response.body.current.weather_descriptions[0] +
      ". It is currently " +
      response.body.current.temperature +
      " fahrenheit and it feels like " +
      response.body.current.feelslike +
      " fahrenheit"
  );
});

const url2 =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHJpeWFua2FzaGFybWExOSIsImEiOiJja3N1MWVhNGIwOGZkMzBuMmUzN3c4NzRjIn0.t8KKr06hB8Q43zfyCFfcDA&limit=1";
request({ url: url2, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];
  console.log("Longitude " + longitude + " Latitude " + latitude);
});
