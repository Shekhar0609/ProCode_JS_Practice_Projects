const ImageContainer = document.querySelectorAll("#image-container"); // Select all elements with the ID 'image-container'

ImageContainer.forEach((container) => {
  // Iterate over each container
  container.addEventListener("click", (evt) => {
    // Add click event listener to each container
    evt.stopPropagation(); // Prevent the event from bubbling up to parent elements
    removeClass(); // Call function to remove 'active-img' class from all containers
    container.classList.add("active-img"); // Add 'active-img' class to the clicked container
  });
});

function removeClass() {
  // Function to remove 'active-img' class from all containers
  ImageContainer.forEach((containerEl) => {
    // Iterate over each container element
    containerEl.classList.remove("active-img"); // Remove 'active-img' class
  });
}
