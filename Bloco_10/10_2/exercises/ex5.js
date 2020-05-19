// GERA UM VALOR ALEATORIO, PARA SETAR O DELAY NO SETTIMEOUT
const messageDelay = () => Math.floor(Math.random() * 5000);

// FUNCÇÃO QUE RETORNA TEMPERATURA
const getMarsTemperature = () => {
  const maxTemperature = 58; // SETA TEMPERATURA
  return Math.floor(Math.random() * maxTemperature); // RETORNA TEMPERATURA MUPLIPLICADO POR VALOR RANDOM
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;// recebe temperatute e convert para fahrenheit
const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) => // RECEBE currentTemperature, da função sendMarsTemperature()
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const sendMarsTemperature = (onSuccess) => { // ONSUCESS, RECEBE UMA FUNÇÃO 
    const currentTemperature = getMarsTemperature(); // RETORNA VALOR DA TEMPERATURA EM CELCIUS
    setTimeout(() => onSuccess(currentTemperature), messageDelay()); // ONSUCESS, RECEBE GREET OU TEMPINFAHRENHEIT
};

sendMarsTemperature(temperatureInFahrenheit);
sendMarsTemperature(greet);
