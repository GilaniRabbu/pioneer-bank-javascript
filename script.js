// Login Button
const logBtn = document.getElementById("log-btn");
logBtn.addEventListener("click", () => {
    const logArea = document.querySelector(".sign-area");
    logArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});

// Submit Button
const Deposit = document.getElementById("deposit");
Deposit.addEventListener("click", () => {
    const DepositNumber = getInputNumber("add-amount");

    // const currentDeposit = document.getElementById("current-deposit").innerText;
    // const currentDepositNum = parseFloat(currentDeposit);
    // const totalDeposit = DepositNumber + currentDepositNum;
    // document.getElementById("current-deposit").innerText = totalDeposit;

    updateSpan("current-deposit", DepositNumber);
    updateSpan("current-balance", DepositNumber);

    document.getElementById("add-amount").value = "";
});

// current-withdraw
const Withdraw = document.getElementById("withdraw");
Withdraw.addEventListener("click", () => {
    const WithdrawNumber = getInputNumber("withdraw-amount");
    console.log(WithdrawNumber);
});

function getInputNumber(input) {
    const amount = document.getElementById(input).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpan(id, DepositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNum = parseFloat(current);
    const totalAmount = DepositNumber + currentNum;
    document.getElementById(id).innerText = totalAmount;
}