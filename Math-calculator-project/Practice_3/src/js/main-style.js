const displayEL = document.querySelector("#display");
const buttons = document.querySelectorAll("#button");

let displayValue = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.innerText;
    // debugger;
    if (buttonValue === "AC") {
      displayValue = "0";
      displayEL.value = displayValue;
    } else if (buttonValue === "DEL") {
      displayValue = displayValue.slice(0, -1);
      displayEL.value = displayValue;
    } else if (buttonValue === "%") {
      displayValue = (parseFloat(displayValue) / 100).toString();
      displayEL.value = displayValue;
    } else if (buttonValue === "=") {
      if (displayValue === undefined || displayValue === "") {
        displayValue = "0";
        displayEL.value = displayValue;
        return;
      }
      try {
        displayValue = eval(displayValue);
        displayEL.value = displayValue;
      } catch (error) {
        displayValue = "Error";
        displayEL.value = displayValue;
        setTimeout(() => {
          displayValue = "";
          displayEL.value = displayValue;
        }, 1000);
      }
    } else {
      displayValue += buttonValue;
      displayEL.value = displayValue;
    }
  });
});
