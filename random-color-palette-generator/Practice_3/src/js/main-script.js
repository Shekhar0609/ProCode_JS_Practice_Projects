const colorBoxes = document.querySelectorAll("#color-palette");

colorBoxes.forEach((box) => {
  let randomColor = Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0");

  box.style.backgroundColor = `#${randomColor}`;
  box.style.borderColor = `#${randomColor}`;
  box.textContent = `#${randomColor}`;

  box.addEventListener("click", (e) => {
    navigator.clipboard
      .writeText(box.textContent)
      .then(() => {
        box.textContent = "Copied!";
        setTimeout(() => {
          box.textContent = `#${randomColor}`;
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });

    box.style.backgroundColor = `#${randomColor}`;
    box.style.borderColor = `#${randomColor}`;
    box.textContent = `#${randomColor}`;
  });
});
