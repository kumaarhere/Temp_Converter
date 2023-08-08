const select = document.querySelector('select[title="temp"]');
const temperatureInput = document.querySelector('.temperature');
const convertButton = document.querySelector('.button');
const results = document.querySelector('.result');

function convertTemperature() {
  const selectedUnit = select.value;
  const temperature = parseFloat(temperatureInput.value);

  if (isNaN(temperature)) {
    results.textContent = 'Please enter a valid temperature value.';
    return;
  }

  let convertedTemperature;
  let resultUnit;

  switch (selectedUnit) {
    case 'Celsius °C':
      convertedTemperature = temperature;
      resultUnit = '°C';
      break;
    case 'Fahrenheit °F':
      convertedTemperature = (temperature - 32) * (5 / 9);
      resultUnit = '°C';
      break;
    case 'Kelvin K':
      convertedTemperature = temperature - 273.15;
      resultUnit = '°C';
      break;
    default:
      results.textContent = 'Please select a valid temperature unit.';
      return;
  }
  const fahrenheit = (convertedTemperature * (9 / 5)) + 32;
  const kelvin = convertedTemperature + 273.15;

  results.innerHTML =
  '<h4>Celsius:</h4>' + convertedTemperature.toFixed(2) + '°C' +
  '<h5>Fahrenheit:</h5>' + fahrenheit.toFixed(2) + ' °F' +
  '<h5>Kelvin: </h5>' + kelvin.toFixed(2) + ' K';

}
//adding event
convertButton.addEventListener('click', convertTemperature);

