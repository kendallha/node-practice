console.log('Client side js file is loaded')
const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const forecastMessage = document.getElementById('forecast');
const errorMessage = document.getElementById('error');

const getForecast = async (address) => {
  const response = await fetch(`/weather?address=${address}`);
  const data = await response.json();
  if (data.error) {
    forecastMessage.textContent = '';
    errorMessage.textContent = data.error;
  } else {
    search.value = '';
    forecastMessage.textContent = `It is ${data.forecast.toLowerCase()} in ${data.location}.`
  }
}

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  errorMessage.textContent = '';
  forecastMessage.textContent = 'Loading...';
  const location = search.value;
  getForecast(location);
});