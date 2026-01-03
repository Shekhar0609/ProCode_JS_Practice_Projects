const dateEl = document.querySelector("#date");
const calculateAgeBtn = document.querySelector(".calculateAge");

calculateAgeBtn.addEventListener("click", function calculateAge() {
  if (dateEl.value === "") {
    alert("please select the DOB");
    return;
  }

  const DOB = new Date(dateEl.value);
  const presentDate = new Date();
  const balanceDaysinSeconds = Math.floor(
    (presentDate - DOB) / 365 / 24 / 60 / 60 / 1000
  );

  const outputEl = document.querySelector(".output");
  outputEl.textContent = `your age is : ${balanceDaysinSeconds}`;
});
