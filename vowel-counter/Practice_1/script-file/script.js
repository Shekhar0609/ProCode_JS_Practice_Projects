const inputTextarea = document.querySelector("#textarea");
const VowelCountEl = document.querySelector(".vowel-count");
const countBtn = document.querySelector(".count-btn");

let vowelCharacters = [
  "a",
  "e",
  "i",
  "o",
  "u",
  "y",
  "A",
  "E",
  "I",
  "O",
  "U",
  "Y",
];

countBtn.addEventListener("click", () => {
  if (inputTextarea.value === "") {
    VowelCountEl.innerText = `Please enter some text.`;
  } else {
    let inputCharacter = inputTextarea.value;
    let vowelCount = 0;

    for (let index = 0; index <= inputCharacter.length; index++) {
      let vowelCheck = vowelCharacters.includes(inputCharacter[index]);
      if (vowelCheck) {
        vowelCount++;
        VowelCountEl.innerText = `Total Vowel count is ${vowelCount}.`;
      }
      console.log(vowelCheck, vowelCount);
    }
  }
});
