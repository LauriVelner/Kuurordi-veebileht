document.addEventListener('DOMContentLoaded', function() {
    fetch(`http://api.weatherapi.com/v1/current.json?key=2cec0e13caed47fe9a230217240911&q=Sölden&aqi=no`)
        .then(response => response.json())
        .then(response => {
            var wind_speed = Math.round((response.current.wind_kph * 0.277778 + Number.EPSILON) * 100) / 100
            document.getElementById('temperature').innerHTML += `${response.current.temp_c}° C`;
            document.getElementById('wind').innerHTML += `${wind_speed}m/s`;
            document.getElementById('humidity').innerHTML += `${response.current.humidity}%`;
        });
    });