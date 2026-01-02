const minutesEl = document.querySelector("#minutes");
const secondsEL = document.querySelector("#seconds");
const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");

let timerId;

stopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  minutesEl.textContent = "00";
  secondsEL.textContent = "00";
  clearInterval(timerId);
  startBtn.removeEventListener("click", startTimer);
});

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(timerId);
});

minutesEl.addEventListener("dblclick", inputDisabled);
secondsEL.addEventListener("dblclick", inputDisabled);

function inputDisabled() {
  console.log(minutesEl.contentEditable);
  if ((minutesEl.contentEditable = false)) {
    minutesEl.setAttribute("contentEditable", "false");
    secondsEL.setAttribute("contentEditable", "false");
  } else {
    minutesEl.setAttribute("contentEditable", "true");
    minutesEl.focus();
    secondsEL.setAttribute("contentEditable", "true");
    secondsEL.focus();
  }
}

function startTimer(e) {
  e.preventDefault();
  if ((minutesEl.contentEditable = true)) {
    minutesEl.setAttribute("contentEditable", "false");
    secondsEL.setAttribute("contentEditable", "false");
  }
  let minutesValue = Number(minutesEl.textContent);
  let secondesValue = Number(secondsEL.textContent);

  timerId = setInterval(() => {
    if (secondesValue === 0) {
      secondesValue = 59;
      minutesValue--;
    } else {
      secondesValue--;
    }

    console.log(minutesValue, secondesValue);
    minutesEl.textContent = minutesValue;
    secondsEL.textContent = secondesValue;
  }, 1000);
}
