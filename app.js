const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city) {
  const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=fcac1348e6e4e615f48e058bcdacca20&units=metric")

  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector("#card").style.backgroundImage="none";
  }
  else{
    document.querySelector(".weather").style.display = "inline";
    document.querySelector(".error").style.display = "none";
  }

  var data = await response.json();
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " kmph";

  if (data.weather[0].main == "Clouds") {
    document.getElementById('card').style.backgroundImage = "url('images/clouds-ani.gif')";
  }
  else if (data.weather[0].main == "Clear") {
    document.getElementById('card').style.backgroundImage = "url('images/clear-ani.gif')";
  }
  else if (data.weather[0].main == "Rain") {
    document.getElementById('card').style.backgroundImage = "url('images/rain-ani.gif')";
  }
  else if (data.weather[0].main == "Drizzle") {
    document.getElementById('card').style.backgroundImage = "url('images/rain-ani.gif')";
  }
  else if (data.weather[0].main == "Mist") {
    document.getElementById('card').style.backgroundImage = "url('images/rain-ani.gif')";
  }
  else if (data.weather[0].main == "Snow") {
    document.getElementById('card').style.backgroundImage = "url('images/snow-ani.gif')";
  }

document.querySelector(".weather").style.display="inline";
document.querySelector(".error").style.display = "none";

}

  searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);

  })
