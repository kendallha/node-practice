const path = require('path');
const express = require('express');
const { geoCode, getWeather } = require('./utils/utils.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/weather', async (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: 'Address must be provided.'
    })
  }
  const coordinates = await geoCode(req.query.address);
  if (!coordinates) {
    return res.send({
      error: 'There was an issue locating this address. Please try another.'
    })
  }
  const forecast = await getWeather(coordinates);
  if (forecast.error) {
    return res.send({
      error: 'There was an issue fetching the forecast for this location. Please try again.'
    })
  }
  res.send({
    forecast: forecast.current.weather_descriptions[0],
    location: forecast.location.name,
    address: req.query.address,
  });
})

app.get('/products', (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term'
    })
  }
  res.send({
    products: []
  })
})

app.listen(3000, () => {
  console.log('Server is up on port 3000')
})