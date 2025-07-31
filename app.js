const apiKey = "d388f39cf87be84569fe0591e0cdda6d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
// https://api.openweathermap.org/data/2.5/weather?q=bihar&appid=d388f39cf87be84569fe0591e0cdda6d&units=metric        (this link is api format)
const weathericon = document.querySelector(".weather-icon");
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
searchbtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {
         let data = await response.json();
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds") {
        weathericon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear") {
        weathericon.src = "images/clear.png";

    }else if(data.weather[0].main == "Rain") {
        weathericon.src = "images/rain.png";

    }else if(data.weather[0].main == "Drizzle") {
        weathericon.src = "images/drizzle.png";

    }else if(data.weather[0].main == "Mist") {
        weathericon.src = "images/mist.png";

    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
        }

   





