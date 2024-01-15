const getWeather = async (coordinates) => {
  try {
    console.log(coordinates);
  const response = await fetch(`http://api.weatherstack.com/current?access_key=d4358a05ce7f3f303d93cfce44e7c830&query=${coordinates}&units=f`);
  const forecast = await response.json();
  if (forecast.error) {
    return {
      error: 'There was an issue fetching the forecast.'
    }
  } else {
  return forecast;
  }
  } catch (error) {
    return {
      error: 'There was an issue fetching the forecast.'
    };
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
      return data.features[0].geometry.coordinates.reverse().toString();
    }  }
  catch (error) {
    console.log('Request failed', error)
  }
}

module.exports = {
  getWeather: getWeather,
  geoCode: geoCode
}