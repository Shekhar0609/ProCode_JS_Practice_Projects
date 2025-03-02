const inputPassword = document.querySelector(".input-password");
const quotes = document.querySelector(".quotes");

inputPassword.addEventListener(
  "input",

  function () {
    let passwordLength = 12;
    let inputCharaters = inputPassword.value;

    if (inputCharaters.length <= passwordLength) {
      quotes.innerText = "Password is length should be 12 chaacter only";
      quotes.style.color = "green";

      if (inputCharaters.search(/[A-Z]/) === -1) {
        console.log(inputCharaters.search(/[A-Z]/) === -1);
        quotes.innerText = "atleast 1 Capital letter Character";
      } else if (inputCharaters.search(/[a-z]/) === -1) {
        quotes.innerText = "atleast 1 Small letter Character";
      } else if (inputCharaters.search(/[0-9]/) === -1) {
        quotes.innerText = "atleast 1 Numaric Character";
        console.log(inputCharaters);
      } else if (inputCharaters.search(/[!\@\#\$\%\^\&\*\(\)\?\`\~]/) == -1) {
        quotes.innerText = "atleast 1 Speacial Character";
      } else if (inputCharaters.length === passwordLength) {
        quotes.innerText = "Password is length is Valid";
      }
    } else {
      //   console.log(inputCharaters.length);
      quotes.innerText = "Password is length is too long";
      quotes.style.color = "red";
    }
  }
);
