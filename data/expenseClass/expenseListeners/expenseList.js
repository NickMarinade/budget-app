const expenseList = document.getElementById('expense-list');

expenseList.addEventListener('click', function (event) {
    if (event.target.parentElement.classList.contains('edit-icon')) {
        expens.editExpense(event.target.parentElement);
    }
    else if (event.target.parentElement.classList.contains('delete-icon')) {
        expens.deleteExpense(event.target.parentElement);
    }
});