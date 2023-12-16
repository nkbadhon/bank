// function for taking current value of Balance
function currentBalance() {
    const currentBalanceCom = document.getElementById('balance-total');
    const currentBalanceString = currentBalanceCom.innerText;
    const currentBalance = parseFloat(currentBalanceString);
    return currentBalance;
}

// function for taking current value of Deposit

function currentDeposit() {
    const currentDepositCom = document.getElementById('deposit-total');
    const currentDepositString = currentDepositCom.innerText;
    const currentDeposit = parseFloat(currentDepositString);
    return currentDeposit;
}
// function for taking current value of Withdraw

function currentWithdraw() {
    const currentWithdrawCom = document.getElementById('withdraw-total');
    const currentWithdrawString = currentWithdrawCom.innerText;
    const currentWithdraw = parseFloat(currentWithdrawString);
    return currentWithdraw;
}

function addBalance() {
    const currentDepo = currentDeposit();
    const deposit = document.getElementById('deposit');
    const depositString = deposit.value;
    deposit.value = '';
    const depositValue = parseFloat(depositString);
    const total = depositValue + currentDepo;

    // update the balance in the web
    const currentDepositCom = document.getElementById('deposit-total');
    currentDepositCom.innerText = total;


}
