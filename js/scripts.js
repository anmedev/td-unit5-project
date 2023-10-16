/* Treehouse FSJS Techdegree
FSJS Project 5 - Public API Requests
*/

// Selects the gallery div where employee cards will be displayed.
const galleryDiv = document.querySelector("#gallery");
galleryDiv.innerHTML = "";

let employees = [];

async function getEmployees() {
  try {
  const response = await fetch("https://randomuser.me/api/?results=12&nat=us")
  if (!response.ok) throw new Error('something went wrong');
  const data = await response.json();
  employees.push(...data.results);
  for (let i = 0; i < employees.length; i++) {
      displayEmployeeCards(employees[i], i);
  }
  card (employees)
  } catch(error) {
      console.log(error)
  }
}
getEmployees();

/**
 * Displays a page of twelve cards with employee data.
 * @param {array} employee - An array of objects containing employee data.
 */
  function displayEmployeeCards(employee, index) {
      const galleryHTML = `
      <div class="card" data-index = ${index}>
        <div class="card-img-container">
          <img class="card-img" src="${employee.picture.thumbnail}" alt="profile picture">
        </div>
        <div class="card-info-container">
          <h3 id="name" class="card-name cap">${employee.name.first} ${employee.name.last}</h3>
          <p class="card-text">${employee.email}</p>
          <p class="card-text cap">${employee.location.city}, ${employee.location.state}</p>
        </div>
      </div>
      `
      galleryDiv.insertAdjacentHTML('beforeend', galleryHTML);
    }

  function card(employees) {
    const cardClass = document.querySelectorAll(".card");
    cardClass.forEach((card, index) => {
      card.addEventListener("click", () => {
          const employeeData = employees[index]
          displayEmployeeModal(employeeData)
          })
        })
      }

  function displayEmployeeModal(employee) {
      let  dob = new Date(employee.dob.date);
      let formatted = `${dob.getMonth() + 1}/${dob.getDate()}/${dob.getFullYear()}`;
      const modalContent = `
        <div class="modal-container">
          <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
            <div class="modal-info-container">
              <img class="modal-img" src="${employee.picture.thumbnail}" alt="profile picture">
              <h3 id="name" class="modal-name cap">${employee.name.first} ${employee.name.last}</h3>
              <p class="modal-text">${employee.email}</p>
              <p class="modal-text cap">${employee.location.city}</p>
              <hr>
              <p class="modal-text">${employee.phone}</p>
              <p class="modal-text">${employee.location.street.number} ${employee.location.street.name}., ${employee.location.city}, ${employee.location.state} ${employee.location.postcode}</p>
              <p class="modal-text">Birthday: ${formatted}</p>
            </div>
          </div>
        </div>
    `
      galleryDiv.insertAdjacentHTML('afterend', modalContent);

      // Selects close button for modal window.
      const modalBtn = document.querySelector("#modal-close-btn");
      const container = document.querySelector(".modal-container");
      modalBtn.addEventListener("click", () => {
        container.style.display = "none";
      })
    }
