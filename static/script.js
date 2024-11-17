// Autor: Lauri V.
// DOMContentLoaded parandada
document.addEventListener('DOMContentLoaded', function() {
    fetch(`http://api.weatherapi.com/v1/current.json?key=2cec0e13caed47fe9a230217240911&q=Sölden&aqi=no`)
        .then(response => response.json())
        .then(response => {
            var wind_speed = Math.round((response.current.wind_kph * 0.277778 + Number.EPSILON) * 100) / 100
            document.getElementById('temperature').innerHTML += `${response.current.temp_c}° C`;
            document.getElementById('wind').innerHTML += `${wind_speed}m/s`;
            document.getElementById('humidity').innerHTML += `${response.current.humidity}%`;
        });

    if (document.getElementById('reservationForm')) {
      console.log("Reservation form found");
  
      document.getElementById('reservationForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission
      
        const formData = {
          numberOfPeople: document.getElementById('people').value,
          startDate: document.getElementById('start').value,
          endDate: document.getElementById('end').value,
          roomType: document.getElementById('room').options[document.getElementById('room').selectedIndex].text,
        };
      
        console.log("Form Data:", formData);
      
        localStorage.setItem('reservationData', JSON.stringify(formData));
      
        window.location.href = "registered.html";
      });
    } else {
      console.error("Reservation form not found");
    }

    if (document.getElementById('reservationDetails')) {
      const reservationData = JSON.parse(localStorage.getItem('reservationData'));

      if (reservationData) {
        const detailsDiv = document.getElementById('reservationDetails');
        detailsDiv.innerHTML = `
          <p><strong>Number of People:</strong> ${reservationData.numberOfPeople}</p>
          <p><strong>Beginning Date:</strong> ${reservationData.startDate}</p>
          <p><strong>End Date:</strong> ${reservationData.endDate}</p>
          <p><strong>Room Type:</strong> ${reservationData.roomType}</p>
        `;
      } else {
        document.getElementById('reservationDetails').innerText = 'No reservation data found.';
      }
    }
});
