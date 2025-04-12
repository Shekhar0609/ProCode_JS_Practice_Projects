const princpleAmt = document.querySelector("#principle-amount");
const interestRate = document.querySelector("#interest-rate");
const tenureEL = document.querySelector("#tenure");

const monnthlyEmi = document.querySelector("#mothly-emi");

const calculateBtn = document.querySelector("#calculate-btn");

calculateBtn.addEventListener("click", () => {
  const princple = princpleAmt.value;
  const interest = `${interestRate.value}*100%`;
  const tenure = tenureEL.value;

  let loanTenureInMonths = tenure / 12;
  let EMI =
    (princple * interest * Math.pow(1 + interest, loanTenureInMonths)) /
      Math.pow(1 + interest, loanTenureInMonths) -
    1;

  monnthlyEmi.textContent = EMI;
});
