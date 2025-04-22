const inputElement = document.querySelector("#input");

const ButtonElements = document.querySelectorAll("#button");

let inputValue = "";

ButtonElements.forEach((buttonEl) => {
  buttonEl.addEventListener("click", (e) => {
    console.log(buttonEl.textContent);

    if (buttonEl.textContent === "AC") {
      inputValue = "";
      inputElement.value = "";
    }

    
  });
});
