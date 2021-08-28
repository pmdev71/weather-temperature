
const loadWeather = async() =>{
    const inputBox = document.getElementById('input-box');
    const inputCity = inputBox.value;
    inputBox.value = '';
    const api = '7e99a06886a8fd0bc394e38de6dbc0fe';

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${api}`);
    const data = await res.json();
    displayWeather(data);
    /* fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${api}`)
    .then(res => res.json())
    .then(data => displayWeather(data)); */
    
};

const displayWeather = data =>{
    // console.log(data);
    const city = document.getElementById('city-name');
    const temperature = document.getElementById('temp');
    const description = document.getElementById('description');
    const temp = (data.main.temp-273.15).toFixed(2);

    city.innerText = `${data.name}`;
    temperature.innerText = `${temp}`;
    description.innerText = `${data.weather[0].main}`;
};
