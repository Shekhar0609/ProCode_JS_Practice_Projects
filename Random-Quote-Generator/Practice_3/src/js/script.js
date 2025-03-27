document.addEventListener("DOMContentLoaded", () => {
  const qouteEl = document.querySelector(".quote");
  const authorEl = document.querySelector(".author");
  const generateQouteBtn = document.querySelector(".generate-qoute-btn");
  generateQouteBtn.addEventListener("click", async () => {
    // Add an event listener to the button
    try {
      // Try to execute the following code
      const response = await fetch("https://dummyjson.com/quotes"); // Fetch the data from the server
      if (!response.ok) {
        // Check if the response is not ok
        throw new Error( // Throw an error
          "An error occurred while fetching the quote data from the server 😢" // Error message
        );
      }

      const data = await response.json(); // Convert the response to JSON

      let randomIndex = Math.floor(Math.random() * data.quotes.length); // Generate a random index

      const { quote, author } = data.quotes[randomIndex]; // Get the quote and author from the data object at the random index generated above and store them in the quote and author variables respectively
      qouteEl.textContent = quote; // Set the text content of the quote element to the quote
      authorEl.textContent = `--${author}`; // Set the text content of the author element to the author
    } catch (error) {
      // Catch the error
      //   console.error(error); // Log the error to the console
      error =
        "An error occurred while fetching the quote data from the server 😢"; // Error message

      qouteEl.textContent = error; // Set the text content of the quote element to the error
      authorEl.textContent = ""; // Set the text content of the author element to an empty string
    }
  });
});
