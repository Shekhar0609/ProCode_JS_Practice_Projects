const inputTextarea = document.querySelector("#textarea");
const vowelCountEl = document.querySelector(".vowel-count");
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
  let inputValue = inputTextarea.value;
  let count = 0;
  if (inputTextarea.value === "") {
    vowelCountEl.classList.add("error");
    vowelCountEl.innerText = "Please write the sometext";
  } else {
    vowelCountEl.classList.remove("error");

    let index = 0;
    while (index <= inputValue.length) {
      let checkVowels = vowelCharacters.includes(inputValue[index]);
      index++;
      if (checkVowels) {
        count++;
        vowelCountEl.innerText = `Total Vowel count is ${count}`;
      }
    }
    // for (let index = 0; index <= inputValue.length; index++) {
    //   let checkVowels = vowelCharacters.includes(inputValue[index]);
    //   if (checkVowels) {
    //     count++;
    //     vowelCountEl.innerText = `Total Vowel count is ${count}`;
    //   }
    // }
  }
});
