const counterEl = document.querySelectorAll("#counter");

window.addEventListener("load", () => {
  counterEl.forEach((el) => {
    el.textContent = "0";
    updateCounter();
    function updateCounter() {
      let currentNum = +el.textContent;
      const dataCeil = el.getAttribute("data-ceil");
      const increment = dataCeil / 15;
      currentNum = Math.ceil(currentNum + increment);
      if (currentNum < dataCeil) {
        el.textContent = `${currentNum}`;
        setTimeout(updateCounter, 50);
      } else {
        el.textContent = dataCeil + "k";
      }
    }
  });
});
