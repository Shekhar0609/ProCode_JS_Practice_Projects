// selecting elements
const inputBox = document.querySelector("#input-box");
const gnerateQRBtn = document.querySelector(".generate-qr-btn");


// click event fire on gnerateQRBtn and check input value is empty or not. if empty sho the alert pop otherwise generate the qr
gnerateQRBtn.addEventListener("click", () => {
  if (inputBox.value == "") {
    alert("Please enter the Massage input field");
    inputBox.focus() //focus on input element
  } 
//   else {
//     let inputText = inputBox.value;
//     let imgQR = document.querySelector(".qr-img");
//     imgQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`;
//   }


  generateQRCode();
});

function generateQRCode() {
  let inputText = inputBox.value;

  let imgQR = document.querySelector(".qr-img");

  imgQR.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText}`;
}
