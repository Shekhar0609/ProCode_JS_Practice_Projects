const buttonEls = document.querySelectorAll("button"); // Select all button elements
let audioEl = document.createElement("audio"); // Create a new audio element

buttonEls.forEach((button) => {
  // Loop through each button
  button.addEventListener("click", () => {
    // Add click event listener to each button
    audioEl.setAttribute(
      // Set the audio element's attributes
      "src", // Set the source of the audio element
      `./audios/${button.innerText.toLowerCase()}.mp3` // Set the source to the corresponding audio file based on button text
    );
    button.appendChild(audioEl); // Append the audio element to the button
    audioEl.play(); // Play the audio
    stopAudio(); // Call the stopAudio function to stop any currently playing audio
    audioEl.addEventListener("ended", () => {
      // Add event listener for when the audio ends
      audioEl.remove(); // Remove the audio element from the button
    });
  });
});

function stopAudio() {
  // Function to stop audio
  console.log(audioEl.paused); // Log the paused state of the audio element
  if (audioEl.paused) {
    // Check if the audio is paused
    audioEl.pause(); // Pause the audio if it's playing
    audioEl.currentTime = 0; // Reset the current time to 0
  }
}
