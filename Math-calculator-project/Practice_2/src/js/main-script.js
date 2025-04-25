const inputElement = document.querySelector("#input");
const buttonElements = document.querySelectorAll("#button");

let inputValue = "";
buttonElements.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
    if (buttonValue === "AC") {
      inputValue = "";
      inputElement.value = inputValue;
    } else if (button.textContent === "DEL") {
      inputValue = inputValue.slice(0, -1);
      inputElement.value = inputValue;
    } else if (buttonValue === "%") {
      inputValue = (parseFloat(inputValue) / 100).toString();
      inputElement.value = inputValue;
    } else if (buttonValue === "=") {
      try {
        inputValue = eval(inputValue);
        inputElement.value = inputValue;
      } catch (error) {
        inputElement.value = "Error";
        setTimeout(() => {
          inputElement.value = inputValue;
        }, 1000);
      }
    } else {
      inputValue += buttonValue;
      inputElement.value = inputValue;
    }
  });
});
