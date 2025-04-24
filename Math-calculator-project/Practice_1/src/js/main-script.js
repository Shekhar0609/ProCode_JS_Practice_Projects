const inputElement = document.querySelector("#input");
const ButtonElements = document.querySelectorAll("#button");

let inputValue = "";

ButtonElements.forEach((buttonEl) => {
  buttonEl.addEventListener("click", (e) => {
    if (e.target.textContent.trim() === "AC") {
      inputValue = "";
      inputElement.value = inputValue;
    } else if (e.target.textContent.trim() === "=") {
      inputValue = eval(inputValue);
      inputElement.value = inputValue;
    } else if (e.target.textContent.trim() === "DEL") {
      inputValue = inputValue.slice(0, -1);
      inputElement.value = inputValue;
    } else if (e.target.textContent.trim() === "%") {
      inputValue = eval(inputValue) / 100;
      inputElement.value = inputValue;
    } else {
      inputValue += e.target.textContent.trim();
      inputElement.value = inputValue;
    }
  });
});
