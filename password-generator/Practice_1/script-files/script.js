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

passwordGenerateBtn.addEventListener("click", () => {
  let str = "";
  if (upperCaseEl.checked) {
    str += uppercaseCharacters;
  }

  if (lowerCaseEl.checked) {
    str += lowercaseCharacters;
  }
  if (numberCheckEl.checked) {
    str += numaricCharacters;
  }
  if (symbolsEl.checked) {
    str += symbolsCharacters;
  }

  let password = "";
  for (let i = 0; i < passwordLengthEl.value; i++) {
    let index = Math.floor(Math.random() * str.length);
    console.log(password);
    password += str[index];
  }

  inputPasswordEl.value = password;
});

passwordCopied.addEventListener("click", () => {
  if (inputPasswordEl.value === "") {
    alert("Please generate password first");
  } else {
    inputPasswordEl.select();
    navigator.clipboard.writeText(inputPasswordEl.value);
    alert(`${inputPasswordEl.value} is copied`);
  }
});
