function depositFunc() {
    const deposit = document.getElementById('deposit');
    const depositValue = deposit.value;
    deposit.value = '';


}

const depositTotalFromPage = document.getElementById('deposit-total');
const depositTotalstring = depositTotalFromPage.innerText;
const depositTotalstringvalue = parseFloat(depositTotalstring)
console.log(depositTotalstringvalue);
// const depositTotal = parseFloat(depositTotalstring);
// console.log(depositTotalstring);
// console.log(depositTotalstring);