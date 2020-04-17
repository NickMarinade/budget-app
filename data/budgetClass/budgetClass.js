class budget {
    constructor() {
        this.budgetFeedback = document.querySelector(".budget-feedback");
        this.budgetInput = document.getElementById("budget-input");
        this.budgetAmount = document.getElementById("budget-amount");
    }

    // submit budget method
    submitBudgetForm() {
        const value = this.budgetInput.value;
        if (value === '' || value < 0) {
            this.budgetFeedback.classList.add('showItem');
            this.budgetFeedback.innerHTML = `<p> value cannot be empty or negative</p>`;
            const self = this;
            setTimeout(function () {
                self.budgetFeedback.classList.remove('showItem');
            }, 3000);
        }
        else {
            this.budgetAmount.textContent = value;
            this.budgetInput.value = '';
            this.showBalance();
        }
    }
}