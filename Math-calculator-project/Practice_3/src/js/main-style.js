const display = document.querySelector("#display");
const buttons = document.querySelectorAll("#button");

let displayValue = "0";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.innerText;
    if (buttonValue === "AC") {
      displayValue = "0";
      display.textContent = displayValue;
    } else if (buttonValue === "=") {
      try {
        displayValue = eval(displayValue);
      } catch (error) {
        displayValue = "Error";
      }
    } else {
      if (displayValue === "0") {
        displayValue = buttonValue;
      } else {
        displayValue += buttonValue;
      }
    }
    display.innerText = displayValue;
    display.scrollTop = display.scrollHeight; // Scroll to the bottom of the display
  });
});
