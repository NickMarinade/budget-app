const expenseForm = document.getElementById('expense-form');


// new instance of ui class
const expens = new expense();


// expense form submit 
expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    expens.submitExpenseForm();
});
