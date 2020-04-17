const budgetForm = document.getElementById('budget-form');
const budg = new budget();
const balanc = new balance();
budgetForm.addEventListener('submit', function (event) {
    event.preventDefault();
    budg.submitBudgetForm();
    balanc.showBalance();
});