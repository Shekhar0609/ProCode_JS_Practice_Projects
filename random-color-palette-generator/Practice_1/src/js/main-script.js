const colorBoxes = document.querySelectorAll("#color-box"); // Select all elements with the id "color-box"

colorBoxes.forEach((box) => {
  // Iterate over each color box
  // Generate a random color in hexadecimal format
  let randomColor = Math.floor(Math.random() * 16777215).toString(16); // Generate a random number and convert it to hexadecimal
  box.style.backgroundColor = "#" + randomColor; // Set the background color of the box
  box.textContent = "#" + randomColor; // Set the text content of the box to the random color

  box.addEventListener("click", () => {
    // Add a click event listener to the box
    navigator.clipboard // Use the Clipboard API to copy the text content of the box to the clipboard
      .writeText(box.textContent) // Copy the text content of the box to the clipboard
      .then(() => {
        // Show a success message when the text is copied
        alert("Color copied to clipboard: " + box.textContent); // Alert the user that the color has been copied
      })
      .catch((err) => {
        // Show an error message if the copy fails
        alert("Failed to copy color: " + box.textContent); // Alert the user that the copy failed
      });
    box.style.backgroundColor = "#" + randomColor; // Set the background color of the box again to ensure it matches the text content
    box.textContent = "#" + randomColor; // Set the text content of the box to the random color again
  });
});
