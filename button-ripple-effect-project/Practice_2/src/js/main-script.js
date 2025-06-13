const btnElement = document.querySelector("#btn"); // Assuming the button has an id of "btn"

btnElement.addEventListener("click", (event) => {
  // Add click event listener to the button
  let spanElement = document.createElement("span"); // Create a new span element
  spanElement.id = "ripple"; // Set the id of the span element
  spanElement.classList = "absolute w-12 h-12 bg-gray-300 rounded-full"; // Set the class of the span element for styling
  btnElement.appendChild(spanElement); // Append the span element to the button
  let rectangle = btnElement.getBoundingClientRect(); // Get the bounding rectangle of the button
  let xPosittion = event.clientX - rectangle.left - spanElement.offsetWidth / 2; // Calculate the x position for the ripple effect
  let yPosittion = event.clientY - rectangle.top - spanElement.offsetWidth / 2; // Calculate the y position for the ripple effect
  spanElement.style.left = `${xPosittion}px`; // Set the left position of the span element
  spanElement.style.top = `${yPosittion}px`; // Set the top position of the span element
  spanElement.style.transform = "scale(0)"; /// Set the initial scale of the span element to 0

  btnElement.addEventListener("animationend", () => {
    // Add an event listener for when the animation ends
    spanElement.remove(); // Remove the span element after the animation ends
  });
});
