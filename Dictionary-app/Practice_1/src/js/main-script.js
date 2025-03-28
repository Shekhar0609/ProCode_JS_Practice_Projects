const inputText = document.querySelector(".input-text"); // Input field for user text
const searchBtn = document.querySelector(".search-btn"); // Search button to trigger the search
const definitionEl = document.querySelector(".definition"); // Element to display the definition

searchBtn.addEventListener("click", async () => {
  // Event listener for the search button

  try {
    const dictionaryAPI = "https://api.dictionaryapi.dev/api/v2/entries/en_US/"; // API URL for dictionary API
    const response = await fetch(dictionaryAPI + inputText.value); // Fetching data from the API
    if (!response.ok) {
      throw new Error("Word not found"); // Throwing an error if the response is not OK
    }
    const data = await response.json(); // Parsing the response to JSON

    const randomIndex = Math.floor(
      Math.random() * data[0].meanings[0].definitions.length
    ); // Generating a random index for definitions

    definitionEl.textContent =
      data[0].meanings[0].definitions[randomIndex].definition; // Displaying the definition in the HTML element
  } catch (errorMessage) {
    // Handling errors
    errorMessage = "Please enter the correct WORD."; // Default error message
    console.log(errorMessage);
    if (inputText.value === "") {
      definitionEl.textContent = "Please enter a word"; // Displaying an error message if the input is empty
      return;
    }
    definitionEl.textContent = errorMessage; // Displaying an error message if the word is not found
  }
});
