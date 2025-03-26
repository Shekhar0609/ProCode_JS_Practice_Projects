const quoteEl = document.querySelector(".quote");
const authorEl = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".generate-btn");




newQuoteBtn.addEventListener("click", async function makerequest() {
  const quoteAPI = "https://dummyjson.com/quotes";
  const response = await (await fetch(quoteAPI)).json();

  randomNumber = Math.floor(Math.random() * response.quotes.length);
  quoteEl.textContent = response.quotes[randomNumber].quote;
  authorEl.textContent = `--${response.quotes[randomNumber].author}.`;
});