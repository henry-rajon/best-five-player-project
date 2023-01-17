const selectBtns = document.getElementsByClassName('select-btn');
const tableContainer = document.getElementById('table-container');
let count = 0;
for (const selectBtn of selectBtns) {
    selectBtn.addEventListener('click', function (event) {
        count++;
        if (count > 5) {
            alert('Already 5 player selected!!');
            return;
        }
        const playerName = event.target.parentNode.children[0].innerText;
        selectBtn.setAttribute('disabled', true);
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td class="h5">${count}.</td>
        <td class="h5 ps-2">${playerName}</td>
        `;
        tableContainer.appendChild(tr);
    })
}

function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputAmount = parseFloat(inputFieldString);
    inputField.value = '';
    return inputAmount;
}

function setInputValue(elementId, totalValue) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = totalValue;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const playerNumber = document.querySelectorAll('#table-container tr').length;
    const inputField = document.getElementById('player-input').value;
    const playerAmount = getInputValue('player-input')
    if (inputField == '') {
        alert('Please enter your per player amount!!');
        return;
    }
    else if (playerNumber < 1) {
        alert('Please Select a Player!!');
        return;
    }
    else {
        const playerExpenses = playerAmount * playerNumber;
        setInputValue('player-expenses-field', playerExpenses)
    }
})

document.getElementById('calculate-total').addEventListener('click', function () {
    const managerInputField = document.getElementById('manager-input').value;
    const coachInputField = document.getElementById('coach-input').value;
    const managerAmount = getInputValue('manager-input');
    const coachAmount = getInputValue('coach-input');
    if (managerInputField == '') {
        alert('Please enter your Manager amount!!');
        return;
    }
    else if (coachInputField == '') {
        alert('Please enter your Coach amount!!');
        return;
    }
    else {
        const playerExpensesField = document.getElementById('player-expenses-field');
        const playerExpensesFieldString = playerExpensesField.innerText;
        const elementFieldAmount = parseFloat(playerExpensesFieldString);

        const netTotal = managerAmount + coachAmount + elementFieldAmount;
        setInputValue('total-amount-field', netTotal);
    }
})



