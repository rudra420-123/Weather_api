let container = document.querySelector(".container");

function fetchWeather() {
    let input = document.getElementById('input');
    let area = input.value;
    let apikey = "86c7417c0291cb71a25859f4c3d34344";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${apikey}`;

    fetch(apiurl)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            if (input.value) {
                let div = document.createElement('div');
                let temp = (data.main.temp - 273.15).toFixed(2);
                div.innerHTML = `
                    <h3>City Name: ${data.name}</h3> 
                    <h3>Main: ${data.weather[0].main}</h3> 
                    <h3>Description: ${data.weather[0].description}</h3> 
                    <h3>Temperature: ${temp} °C</h3> 
                    <h3>Humidity: ${data.main.humidity}%</h3> 
                    <h3>Wind Speed: ${data.wind.speed} m/s</h3> 
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">`;
                container.appendChild(div);
                input.value = '';
            } else {
                alert("Enter Your City Name");
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

function resetWeather() {
    // Clear the input field
    input.value = '';
    const appendedDiv = container.querySelectorAll('div');
    appendedDiv.forEach((div) => {
        container.removeChild(div);
    });
}