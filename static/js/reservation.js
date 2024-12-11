// Autor: ChatGPT + https://www.w3schools.com/howto/howto_css_modals.asp
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('reservationForm')) {
      const startInput = document.getElementById('start');
      const endInput = document.getElementById('end');
    
      function formatDate(date) {
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const dd = String(date.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
      }
    
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
      startInput.setAttribute('min', formatDate(tomorrow));
    
      startInput.addEventListener('change', () => {
        const startDate = new Date(startInput.value);
        if (!isNaN(startDate)) {
          const nextDay = new Date(startDate);
          nextDay.setDate(startDate.getDate() + 1);
          endInput.setAttribute('min', formatDate(nextDay));
        }
      });
  
      document.getElementById('reservationForm').addEventListener('submit', function (event) {
        event.preventDefault(); 
    
        var numberOfPeople = document.getElementById('people').value;
        var startDate = document.getElementById('start').value;
        var endDate = document.getElementById('end').value;
        var roomType = document.getElementById('room').options[document.getElementById('room').selectedIndex].text;
      
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];

        modal.style.display = "block";

        // Elemendi sulgemine ristist
        span.onclick = function() {
          closeModal()
        }

        // Kui elemendist vajutatakse klikitakse, siis element kaob
        window.onclick = function(event) {
          if (event.target == modal) {
            closeModal()
          }
        } 

        const detailsDiv = document.getElementById('reservationDetails');
        detailsDiv.innerHTML = `
          <p><strong>Number of People:</strong> ${numberOfPeople}</p>
          <p><strong>Beginning Date:</strong> ${startDate}</p>
          <p><strong>End Date:</strong> ${endDate}</p>
          <p><strong>Room Type:</strong> ${roomType}</p>
        `;
      });
    } else {
      console.error("Reservation form not found");
    }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
      closeModal();
  }
});

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
