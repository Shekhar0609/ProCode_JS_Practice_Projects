const inputPassword = document.querySelector("#input-password");
const inputPasswordPopUp = document.querySelector(".input-password-pop");

inputPassword.addEventListener(
  "input",

  function passwordCheck() {
    let inputText = inputPassword.value;
    let passwordLength = 12;

    if (inputText.length <= passwordLength) {
      inputPasswordPopUp.style.color = "red";

      //below code are templete literal with if else condition
      // inputPasswordPopUp.innerText = `${
      //   inputText.search(/[A-Z]/) == -1
      //     ? "1 UpperCase character"
      //     : inputText.search(/[a-z]/) == -1
      //     ? "1 LowerCase character"
      //     : inputText.search(/[0-9]/) == -1
      //     ? "1 Numaric character"
      //     : inputText.search(/[\!\@\#\$\%\^\&\\*\(\)\?\~]/) == -1
      //     ? "1 Special character"
      //     : inputText.length === passwordLength
      //     ? "Password is valid"
      //     : "Password should be 12 character"
      // }
      //     `;

      // if (inputPasswordPopUp.innerText.includes("Password is valid")) {
      //   inputPasswordPopUp.style.color = "green";
      // } else {
      //   inputPasswordPopUp.style.color = "red";
      // }

      //below code are if else condition
      if (inputText.search(/[A-Z]/) == -1) {
        inputPasswordPopUp.innerText = "1 UpperCase character";
      } else if (inputText.search(/[a-z]/) == -1) {
        inputPasswordPopUp.innerText = "1 LowerCase character";
      } else if (inputText.search(/[0-9]/) == -1) {
        inputPasswordPopUp.innerText = "1 Numaric character";
      } else if (inputText.search(/[\!\@\#\$\%\^\&\\*\(\)\?\~]/) == -1) {
        inputPasswordPopUp.innerText = "1 Special character";
      } else if (inputText.length === passwordLength) {
        inputPasswordPopUp.innerText = "Password is valid";
        inputPasswordPopUp.style.color = "green";
      } else {
        inputPasswordPopUp.innerText = "Password should be 12 character";
      }
    } else {
      inputPasswordPopUp.innerText = "Password must be less than 12 character";
      inputPasswordPopUp.style.color = "red";
    }
  }
);
