class expense {
    constructor() {
        this.expenseFeedback = document.querySelector(".expense-feedback");
        this.expenseAmount = document.getElementById("expense-amount");
        this.expenseForm = document.getElementById("expense-form");
        this.expenseInput = document.getElementById("expense-input");
        this.amountInput = document.getElementById("amount-input");
        this.expenseList = document.getElementById("expense-list");
        this.itemList = [];
        this.itemID = 0;
    }
    // submit expense form
    submitExpenseForm() {
        const expenseValue = this.expenseInput.value;
        const amountValue = this.amountInput.value;
        if (expenseValue === '' || amountValue === '' || amountValue < 0) {
            this.expenseFeedback.classList.add('showItem');
            this.expenseFeedback.innerHTML = `<p> values cannot be empty or negative </p>`;
            const self = this;
            setTimeout(function () {
                self.expenseFeedback.classList.remove('showItem');
            }, 3000);

        }
        else {
            let amount = parseInt(amountValue);
            this.expenseInput.value = '';
            this.amountInput.value = '';

            let expense = {
                id: this.itemID,
                title: expenseValue,
                amount: amount

            }
            this.itemID++;
            this.itemList.push(expense);
            this.addExpense(expense);
            // show balance
            balanc.showBalance();
        }
    }

    // add expense
    addExpense(expense) {
        const div = document.createElement('div');
        div.classList.add('expense');
        div.innerHTML = `
    <div class="expense-item d-flex justify-content-between align-items-baseline">
         <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6>
         <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>
         <div class="expense-icons list-item">
          <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
           <i class="fas fa-edit"></i>
          </a>
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash"></i>
          </a>
         </div>
        </div>
    
    `;
        this.expenseList.appendChild(div);
    }


    // total expense
    totalExpense() {
        let total = 0;
        if (this.itemList.length > 0) {
            total = this.itemList.reduce(function (acc, curr) {
                acc += curr.amount;
                return acc;
            }, 0);

        }
        this.expenseAmount.textContent = total;
        return total;
    }

    // edit expense 
    editExpense(element) {
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement.parentElement.parentElement;
        //remove from dom
        this.expenseList.removeChild(parent);
        // remove from the list
        let expense = this.itemList.filter(function (item) {
            return item.id === id;
        })
        //show value 
        this.expenseInput.value = expense[0].title;
        this.amountInput.value = expense[0].amount;
        //remove from list
        let tempList = this.itemList.filter(function (item) {
            return item.id !== id;
        })
        this.itemList = tempList;
        balanc.showBalance();
    }

    // delete expense
    deleteExpense(element) {
        let id = parseInt(element.dataset.id);
        let parent = element.parentElement.parentElement.parentElement;
        //remove from dom
        this.expenseList.removeChild(parent);

        //remove from list
        let tempList = this.itemList.filter(function (item) {
            return item.id !== id;
        })
        this.itemList = tempList;
        balanc.showBalance();

    }
}