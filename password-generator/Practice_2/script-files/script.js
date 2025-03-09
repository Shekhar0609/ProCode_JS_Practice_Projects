const inputPasswordEl = document.querySelector("#input-password");

const passwordCopied = document.querySelector(".password-clipboad");

const passwordLengthEl = document.querySelector("#password-length");
const upperCaseEl = document.querySelector("#uppercase-check");
const lowerCaseEl = document.querySelector("#lowercase-check");
const numberCheckEl = document.querySelector("#numbers-check");
const symbolsEl = document.querySelector("#symbols-check");

const passwordGenerateBtn = document.querySelector(".generate-password-btn");

let uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
let numaricCharacters = "1234567890";
let symbolsCharacters = "~!@#$%^&*()_+{}[]<>:?";

let alertPop =
  "Please select at least one character type and lenght between 10 to 15";

passwordGenerateBtn.addEventListener("click", () => {
  let checkCharacter = "";

  if (upperCaseEl.checked) {
    checkCharacter += uppercaseCharacters;
    console.log(checkCharacter);
  }

  if (lowerCaseEl.checked) {
    checkCharacter += lowercaseCharacters;
    console.log(checkCharacter);
  }

  if (numberCheckEl.checked) {
    checkCharacter += numaricCharacters;
    console.log(checkCharacter);
  }

  if (symbolsEl.checked) {
    checkCharacter += symbolsCharacters;
    console.log(checkCharacter);
  }

  if (checkCharacter.length === 0) {
    alert(alertPop);
    return; // Stop password generation
  }

  let generatedPassword = "";
  for (let index = 0; index < passwordLengthEl.value; index++) {
    let randomPasswordIndex = Math.floor(Math.random() * checkCharacter.length);
    generatedPassword += checkCharacter[randomPasswordIndex];
    console.log(generatedPassword);
  }

  inputPasswordEl.value = generatedPassword;
  console.log(inputPasswordEl.value);
});

passwordCopied.addEventListener("click", () => {
  if (inputPasswordEl.value === "") {
    alert(alertPop);
  } else {
    inputPasswordEl.select();
    navigator.clipboard.writeText(inputPasswordEl.value);
    alert(`${inputPasswordEl.value} is copied`);
  }
});
