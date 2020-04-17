const budgetForm = document.getElementById('budget-form');
const budg = new budget()
budgetForm.addEventListener('submit', function (event) {
    event.preventDefault();
    budg.submitBudgetForm();
});