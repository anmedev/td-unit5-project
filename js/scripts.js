/* Treehouse FSJS Techdegree
FSJS Project 5 - Public API Requests
*/

// Selects the gallery div where employee cards will be displayed.
const galleryDiv = document.querySelector("#gallery");
galleryDiv.innerHTML = "";

// Fetches data of 12 random users from the Random User Generator API.
fetch("https://randomuser.me/api/?results=12")
  .then(response => response.json())
  .then(employeeData => displayEmployeeCards(employeeData.results))

/**
 * Displays a page of twelve cards with employee data.
 * @param {array} list - An array of objects containing employee data.
 */
  function displayEmployeeCards(employees) {
    for (let i = 0; i < employees.length; i++) {
      const galleryHTML = `
      <div class="card">
        <div class="card-img-container">
          <img class="card-img" src="${employees[i].picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
          <h3 id="name" class="card-name cap">${employees[i].name.first} ${employees[i].name.last}</h3>
          <p class="card-text">${employees[i].email}</p>
      <p class="card-text cap">${employees[i].location.city}, ${employees[i].location.state}</p>
    </div>
  </div>
  `
  galleryDiv.insertAdjacentHTML('beforeend', galleryHTML);
    }
  };

// HTML content for modal window.
const modalHTML = `
  <div class="modal-container">
    <div class="modal">
      <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
      <div class="modal-info-container">
        <img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">
        <h3 id="name" class="modal-name cap">name</h3>
        <p class="modal-text">email</p>
        <p class="modal-text cap">city</p>
        <hr>
        <p class="modal-text">(555) 555-5555</p>
        <p class="modal-text">123 Portland Ave., Portland, OR 97204</p>
        <p class="modal-text">Birthday: 10/21/2015</p>
      </div>
    </div>
  </div>
  `

galleryDiv.insertAdjacentHTML('afterend', modalHTML);

