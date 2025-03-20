const scrollbarEL = document.querySelector(".scrollbar");

window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  let innerHeigth = window.innerHeight;
  let scrollHeigth = document.body.scrollHeight;

  let value = (scrollY / (scrollHeigth - innerHeigth)) * 100;

  scrollbarEL.style.width = value + "%";
  console.log(value);
});
