const transactionForm = document.getElementById('transactionForm');
const transactionTable = document.querySelector('.transaction-table tbody');

transactionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const type = document.getElementById('type').value;
    const name = document.getElementById('name').value;
    const amount = parseFloat(document.getElementById('amount').value);

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${type}</td>
        <td>${name}</td>
        <td>$${amount}</td>
        <td><button class="delete-btn  btn-sm">Delete</button></td>
    `;

    transactionTable.appendChild(newRow);

    transactionTable.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.parentNode.parentNode;

            row.remove();
        }
    });

    // Clear form fields
    document.getElementById('type').value = '';
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
});