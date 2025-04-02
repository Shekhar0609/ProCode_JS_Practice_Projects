const inputField = document.getElementById("iput-text"); // input field for the word to be searched
const searchBtn = document.getElementById("search-btn"); // search button to trigger the search
const definitionEL = document.getElementById("definition"); // element to display the definition of the word

searchBtn.addEventListener("click", async function () {
  // event listener for the search button

  try {
    const dictionaryAPI = "https://api.dictionaryapi.dev/api/v2/entries/en_US/"; // API endpoint for the dictionary
    const inputValue = inputField.value.trim(); // get the value from the input field and trim any whitespace
    const resopnse = await fetch(dictionaryAPI + inputValue); // fetch the data from the API using the word entered in the input field

    if (!resopnse.ok) {
      // check if the response is not ok (e.g., word not found or server error)
      throw new Error("Word not found"); // Throwing an error if the response is not OK
    }

    const data = await resopnse.json(); // parse the response data as JSON

    const randomIndex = Math.floor(Math.random() * data.length); // generate a random index to select a random definition from the array of definitions
    definitionEL.textContent =
      data[0].meanings[0].definitions[randomIndex].definition; // display the definition of the word in the definition element
    // console.log(data[0].meanings[0].definitions[randomIndex].definition);
    // log the data to the console for debugging
  } catch (error) {
    error =
      "An error occurred while fetching the definition. Please try again.";
    if (inputField.value === "") { // check if the input field is empty
      definitionEL.textContent = "Please enter a word to search."; // display a message if the input field is empty
      return; // check if the input field is empty and display a message if it is
    }

    definitionEL.textContent = error; // display an error message if there is an error during the fetch
  }
});
