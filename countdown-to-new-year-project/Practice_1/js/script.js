const yearElement = document.querySelector(".year");
const daysElement = document.querySelector("#days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

window.addEventListener("DOMContentLoaded", function countDown() {
  const presentDate = new Date();

  const nextYear = presentDate.getFullYear() + 1;
  yearElement.textContent = nextYear;

  const targetDate = new Date(`January 01 ${nextYear} 00:00:00`);

  const totalSeconds = (targetDate - presentDate) / 1000;

  const leftDays = Math.floor(totalSeconds / (60 * 60) / 24);
  const leftHours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const leftMinnutes = Math.floor((totalSeconds / 60) % 60);
  const leftSeconds = Math.floor(totalSeconds % 60);

  daysElement.textContent = leftDays;
  hoursElement.textContent = leftHours;
  minutesElement.textContent = leftMinnutes;
  secondsElement.textContent = leftSeconds;
  this.setInterval(countDown, 1000);
});
