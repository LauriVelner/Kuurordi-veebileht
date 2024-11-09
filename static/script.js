// Autor: Lauri V.
document.addEventListener('DOMContentLoaded', function() {
    fetch(`http://api.weatherapi.com/v1/current.json?key=2cec0e13caed47fe9a230217240911&q=Sölden&aqi=no`)
        .then(response => response.json())
        .then(response => {
            document.getElementById('weather').innerHTML += `${response.current.temp_c}° C`;
        });
});