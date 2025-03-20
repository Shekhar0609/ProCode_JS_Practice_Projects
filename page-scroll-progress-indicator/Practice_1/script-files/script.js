const scrollBar = document.querySelector(".scrollbar");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let innerHeight = window.innerHeight;
  let scrollHeigth = document.body.scrollHeight;
  let value = (scrollY / (scrollHeigth - innerHeight)) * 100;

  scrollBar.style.width = value + "%";
  console.log(scrollY);
  console.log(innerHeight);
  console.log(scrollHeigth);
  console.log(value);
});
