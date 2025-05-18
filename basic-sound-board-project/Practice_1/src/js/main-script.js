const buttonEls = document.querySelectorAll("button"); // Select all button elements

buttonEls.forEach((button) => {
  // Loop through each button
  button.addEventListener("click", () => {
    // Add click event listener to each button
    let audioEl = document.createElement("audio"); // Create a new audio element
    audioEl.setAttribute(
      // Set the audio element's attributes
      "src", // Set the source of the audio element
      `./audios/${button.innerText.toLowerCase()}.mp3` // Set the source to the corresponding audio file based on button text
    );
    button.appendChild(audioEl); // Append the audio element to the button
    audioEl.play();
  });
});
