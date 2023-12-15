function depositFunc() {
    const deposit = document.getElementById('deposit');
    const depositString = deposit.value;
    deposit.value = '';
    const depositValue = parseFloat(depositString);

    // getting the current value 
    const depositTotalFromPage = document.getElementById('deposit-total');
    const depositTotalstring = depositTotalFromPage.innerText;
    const depositTotalstringvalue = parseFloat(depositTotalstring)
    console.log(depositTotalstringvalue);
    depositTotalFromPage.innerText = depositTotalstringvalue + depositValue;

    // update in the current balance
    const currentBalanceWhole = document.getElementById('balance-total');
    const currentBalancetring = currentBalanceWhole.innerText;
    const currentBalance = parseFloat(currentBalancetring);
    const updatedBalance = currentBalance + depositValue;
    currentBalanceWhole.innerText = updatedBalance;

}

const depositTotalFromPage = document.getElementById('deposit-total');
const depositTotalstring = depositTotalFromPage.innerText;
const depositTotalstringvalue = parseFloat(depositTotalstring)
console.log(depositTotalstringvalue);




