const searchBarContainer = document.querySelector("#search-bar-container");
const searchBtn = document.querySelector("#search-btn");
const searchInput = document.querySelector("#search-input");

searchBtn.addEventListener("click", () => {
  searchBarContainer.classList.toggle("active");
  searchInput.focus();
});
