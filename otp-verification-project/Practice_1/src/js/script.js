const numberElements = document.querySelectorAll('input[type="number"]');
const submitButton = document.querySelector('button[type="submit"]');

numberElements.forEach((element, idx) => {
  element.addEventListener("input", (event) => {
    const currentInput = event.target;
    let value = currentInput.value;

    value = value.replace(/\D/g, "");

    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    currentInput.value = value;

    if (value.length === 1) {
      if (idx + 1 < numberElements.length) {
        numberElements[idx + 1].focus();
      }
    }
  });

  element.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" && element.value === "" && idx > 0) {
      numberElements[idx - 1].focus();
    }
  });
});

submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(Array.from(numberElements));
  const values = Array.from(numberElements)
    .map((el) => el.value)
    .join("");

  if (values.length === numberElements.length) {
    alert(`Submitted values: ${values}`);
  } else {
    alert("Please fill all fields.");
  }
});
