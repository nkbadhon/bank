function Balance(x, y) {
    // To find the current value of Balance
    const balanceCell = document.getElementById('balance-total');
    const balancestring = balanceCell.innerText;
    const balance = parseFloat(balancestring);

    if (x == 0) {
        balanceCell.innerText = y + balance
    }
    else if (x == 1) {

        balanceCell.innerText = balance - y;
    }

}