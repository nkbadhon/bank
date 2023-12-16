function depositFunc() {
    const depositCell = document.getElementById('deposit');
    const depositString = depositCell.value;
    deposit.value = '';
    const depositValue = parseFloat(depositString);

    // Updating the balance
    Balance(0, depositValue);

    // getting the current value 
    const depositTotalFromPage = document.getElementById('deposit-total');
    const depositTotalstring = depositTotalFromPage.innerText;
    const depositTotalstringvalue = parseFloat(depositTotalstring);
    console.log(depositTotalstringvalue);
    depositTotalFromPage.innerText = depositTotalstringvalue + depositValue;

}





