const inputElements = document.querySelectorAll("input[type='number']");
const submitBtn = document.querySelector("#submit-btn");

inputElements.forEach(function (element, index) {
  element.addEventListener("input", (event) => {
    const currentInput = event.target;

    let value = currentInput.value;

    value = value.replace(/\D/g, "");

    if (value.length > 1) {
      value = value.slice(0, 1);
    }

    currentInput.value = value;

    if (index < inputElements.length - 1) {
      const nextInput = inputElements[index + 1];
      if (value) {
        nextInput.focus();
      } else {
        currentInput.focus();
      }
    }

    element.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && element.value === "" && index > 0) {
        const previousInput = inputElements[index - 1];
        previousInput.focus();
      }
    });

    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const inputValues = Array.from(inputElements)
        .map((input) => input.value)
        .join("");

      if (inputValues.length === inputElements.length) {
        alert(`Submitted values: ${inputValues}`);
        inputElements.forEach((input) => (input.value = ""));
        inputElements[0].focus();
        location.reload();
      } else {
        alert("Please fill all the inputs before submitting.");
      }
    });
  });
});
