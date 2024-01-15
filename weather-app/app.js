const getWeather = async (coordinates) => {
  try {
    console.log(coordinates);
  const response = await fetch(`http://api.weatherstack.com/current?access_key=d4358a05ce7f3f303d93cfce44e7c830&query=${coordinates}&units=f`);
  const {error, current} = await response.json();
  if (error) {
    console.log('Something went wrong')
  } else {
  console.log(`It is currently ${current.temperature} degrees.`);
  }
  } catch (e) {
    console.log('Something went wrong', e);
  }

}


const geoCode = async (location) => {
  const geoCodeUrl =  `https://api.geocodify.com/v2/geocode?api_key=iJ3nFIV26vfYGWxSysSNrn3x6lIbV5Wr&q=${location}`;

  try {
const response = await fetch(geoCodeUrl);
const {error, response: data} = await response.json();
if (error) {
  console.log('There was an issue with the request.')
} 
else {
  getWeather(data.features[0].geometry.coordinates.reverse().toString());
}  }
  catch (e) {
    console.log('Request failed', e)
  }
}

geoCode('Sandpoint, ID');