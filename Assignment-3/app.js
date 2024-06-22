const currentDateElement = document.getElementById("currentDate");
const currentDate = new Date();
currentDateElement.textContent = currentDate.toDateString();

let input = document.getElementById("userValue");

const apiKey = "f5d6ae5559f8b1ec335ce6574abeef6c";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button"); 


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    
    // console.log(data);
    
    document.getElementById('city').innerHTML = data.name+", " + data.sys.country;
    document.getElementById('temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.getElementById('feel').innerHTML = "Feel Like:" + Math.round(data.main.feels_like) + "°C";
    document.querySelector('.conditions').innerHTML = data.weather[0].main;
    // document.querySelector('.conditions').innerHTML = data.weather[0].icon;
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(input.value);
});

