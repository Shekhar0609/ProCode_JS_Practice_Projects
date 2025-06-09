const btnEl = document.querySelector("#btn"); // Select the button element

btnEl.addEventListener("click", (event) => {
  // Add click event listener
  let spanEl = document.createElement("span"); // Create a new span element
  spanEl.className = "ripple absolute w-12 h-12 bg-gray-300 rounded-full"; // Set class for ripple effect

  btnEl.appendChild(spanEl); // Append the span to the button
  let rect = btnEl.getBoundingClientRect(); // Get the button's position and size
  let xPos = event.clientX - rect.left - spanEl.offsetWidth / 2; // Calculate x positio
  let yPos = event.clientY - rect.top - spanEl.offsetHeight / 2; // Calculate y position
  spanEl.style.left = `${xPos}px`; // Set the left position of the spann
  spanEl.style.top = `${yPos}px`; // Set the top position of the span

  spanEl.addEventListener("animationend", () => {
    // Add animation end event listener
    spanEl.remove(); // Remove the span after the animation ends
  });
});
