const colorPaletteBoxes = document.querySelectorAll("#color-palette");  // Select all elements with the ID "color-palette"

colorPaletteBoxes.forEach((box) => {    // Loop through each box
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);    // Generate a random hex color
  box.style.backgroundColor = randomColor;  // Set the background color of the box to the random color
  box.style.borderColor = randomColor;  // Set the border color of the box to the random color
  box.textContent = randomColor;    // Set the text content of the box to the random color

  box.addEventListener("click", () => { // Add a click event listener to the box
    navigator.clipboard     //   Copy the hex color code to the clipboard
      .writeText(box.textContent) //   Get the text content of the box (the hex color code)
      .then(() => {     //   Show an alert message when the text is copied successfully
        alert("Copied the hex color code: " + box.textContent);     //   Show an alert message when the text is copied successfully
      })
      .catch((err) => { //   Show an alert message when the text copy fails
        alert("Failed to copy the text: " + err); //   Show an alert message when the text copy fails
      });

    box.style.backgroundColor = randomColor; // Set the background color of the box to the random color
    box.style.borderColor = randomColor; //  // Set the border color of the box to the random color
    box.textContent = randomColor;  //  Set the text content of the box to the random color
  });
});
