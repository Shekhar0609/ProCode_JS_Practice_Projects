const counterEl = document.querySelectorAll("#counter"); // Select all elements with id "counter"

window.addEventListener("load", () => {
  // Wait for the window to load

  counterEl.forEach((el) => {
    // Initialize each counter element
    el.textContent = "0"; // Set initial text content to "0"
    updateCounter(); // Start the counter update function
    function updateCounter() {
      // Function to update the counter
      let currentNum = +el.textContent; // Convert current text content to a number
      const dataCeil = el.getAttribute("data-ceil"); // Get the target number from the data attribute
      const increment = dataCeil / 15; // Calculate the increment value
      currentNum = Math.ceil(currentNum + increment); // Increment the current number
      if (currentNum < dataCeil) {
        // Check if the current number is less than the target
        el.textContent = `${currentNum}`; // Update the text content with the current number
        setTimeout(updateCounter, 50); // Call the updateCounter function again after 50 milliseconds
      } else {
        // If the current number has reached or exceeded the target
        el.textContent = dataCeil + "k"; // Set the text content to the target number with "k"
      }
    }
  });
});
