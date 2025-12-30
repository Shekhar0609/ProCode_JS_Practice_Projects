document.addEventListener("DOMContentLoaded", () => {
  const containerEL = document.querySelector(".container"); // selecting the container element from the DOM

  const date = new Date(); // creating a new date object to get the current date and time

  const month = date.toLocaleDateString("en-IN", { month: "long" }); // getting the full month name
  const weekday = date.toLocaleDateString("en-IN", { weekday: "long" }); // getting the full weekday name
  const presentDate = date.getDate(); // getting the current date of the month
  const year = date.getFullYear(); // getting the current year

  // populating the container element with the current date information

  //   containerEL.innerHTML = `<h2 class="month">${month}</h2>
  //         <span class="weekDay">${weekday}<span>
  //         <h1 class="date">${presentDate}</h1>
  //         <span class="year">${year}</span>`;

  // Creating and appending elements individually
  const monthEL = document.createElement("h2"); // creating h2 element for month
  monthEL.className = "month"; // assigning class name to the month element
  monthEL.innerText = month; // setting the inner text of the month element to the current month
  containerEL.append(monthEL); // appending the month element to the container element

  const weekDayEl = document.createElement("span"); // creating span element for weekday
  weekDayEl.className = "weekDay"; // assigning class name to the weekday element
  weekDayEl.innerText = weekday; // setting the inner text of the weekday element to the current weekday
  containerEL.append(weekDayEl); // appending the weekday element to the container element

  const dateEl = document.createElement("h1"); // creating h1 element for date
  dateEl.className = "date"; // assigning class name to the date element
  dateEl.innerText = presentDate; // setting the inner text of the date element to the current date
  containerEL.append(dateEl); // appending the date element to the container element

  const yearEl = document.createElement("span"); // creating span element for year
  monthEL.className = "month"; // assigning class name to the month element
  yearEl.className = "year"; // assigning class name to the year element
  yearEl.innerText = year; // setting the inner text of the year element to the current year
  containerEL.append(yearEl); // appending the year element to the container element
});
