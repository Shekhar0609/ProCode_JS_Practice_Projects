document.addEventListener("DOMContentLoaded", () => {
  const qouteEl = document.querySelector(".qoute");
  const authorEl = document.querySelector(".author");
  const newQuoteBtn = document.querySelector(".generate-quote");

  newQuoteBtn.addEventListener("click", async () => {
    try {
      const quoteAPI = await fetch("https://dummyjson.co/quotes"); // Fetching the quote API
      const quoteData = await quoteAPI.json(); // Parsing the response to JSON

      randomQoute = Math.floor(Math.random() * quoteData.quotes.length); // Generating a random number

      const { quote, author } = quoteData.quotes[randomQoute]; // Destructuring the quoteData object

      qouteEl.textContent = quote; // Setting the quote text content
      authorEl.textContent = author; // Setting the author text content
    } catch (error) {
      error =
        "Sorry, the quote API is not available at the moment. Please try again later.";
      qouteEl.textContent = error; // Displaying the error message
      authorEl.textContent = ""; // Clearing the author text content
    }
  });
});
