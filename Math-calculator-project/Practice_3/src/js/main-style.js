const displayEL = document.querySelector("#display");
const buttons = document.querySelectorAll("#button");

let displayValue = "0";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.innerText;
    console.log(buttonValue);
    // debugger;
    if (buttonValue === "AC") {
      displayValue = "0";
      displayEL.value = displayValue;
    } else if (buttonValue === "DEL") {
      displayValue = displayValue.slice(0, -1);
      displayEL.value = displayValue;
    } else if (buttonValue === "=") {
      try {
        displayValue = eval(displayValue);
      } catch (error) {
        displayValue = "Error";
        setTimeout(() => {
          displayValue = "0";
          displayEL.value = displayValue;
        }, 1000);
      }
    }
    displayEL.value = displayValue;
  });
});
