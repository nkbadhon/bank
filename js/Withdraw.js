function withdrawFunc() {
    const withdrawCell = document.getElementById('withdraw-input');
    const withdrawString = withdrawCell.value;
    withdrawCell.value = '';
    const withdrawValue = parseFloat(withdrawString);

    Balance(1, withdrawValue);

    // getting the current value 
    const withdrawTotalFromPage = document.getElementById('withdraw-total');
    const withdrawTotalstring = withdrawTotalFromPage.innerText;
    const withdrawTotalstringvalue = parseFloat(withdrawTotalstring);
    console.log(withdrawTotalstringvalue);
    withdrawTotalFromPage.innerText = withdrawTotalstringvalue + withdrawValue;

}





