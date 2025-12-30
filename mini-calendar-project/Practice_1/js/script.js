document.addEventListener("DOMContentLoaded", () => {
  const containerEL = document.querySelector(".container");

  const date = new Date();

  const month = date.toLocaleDateString("en-IN", { month: "long" });
  const weekday = date.toLocaleDateString("en-IN", { weekday: "long" });
  const presentDate = date.getDate();
  const year = date.getFullYear();

  //   containerEL.innerHTML = `<h2 class="month">${month}</h2>
  //         <span class="weekDay">${weekday}<span>
  //         <h1 class="date">${presentDate}</h1>
  //         <span class="year">${year}</span>`;

  const monthEL = document.createElement("h2");
  monthEL.className = "month";
  monthEL.innerText = month;
  containerEL.append(monthEL);

  const weekDayEl = document.createElement("span");
  weekDayEl.className = "weekDay";
  weekDayEl.innerText = weekday;
  containerEL.append(weekDayEl);

  const dateEl = document.createElement("h1");
  dateEl.className = "date";
  dateEl.innerText = presentDate;
  containerEL.append(dateEl);

  const yearEl = document.createElement("span");
  monthEL.className = "month";
  yearEl.className = "year";
  yearEl.innerText = year;
  containerEL.append(yearEl);

});
