const selectBtns = document.getElementsByClassName('select-btn');
const tableContainer = document.getElementById('table-container');
let count = 0;
for (const selectBtn of selectBtns) {
    selectBtn.addEventListener('click', function (event) {
        count++;
        if (count > 5) {
            alert('warning');
            return;
        }
        const playerName = event.target.parentNode.children[0].innerText;
        selectBtn.setAttribute('disabled', true);
        console.log(playerName)
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="h5">${count}.</td>
            <td class="h5 ps-2">${playerName}</td>
        `;
        tableContainer.appendChild(tr);
    })
}