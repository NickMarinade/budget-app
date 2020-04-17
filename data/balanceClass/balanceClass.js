class balance {
    constructor() {
        this.budgetAmount = document.getElementById("budget-amount");
        this.balance = document.getElementById("balance");
        this.balanceAmount = document.getElementById("balance-amount");
    }

    // show balance
    showBalance() {
        const total = parseInt(this.budgetAmount.textContent);
        this.balanceAmount.textContent = total;

        if (total < 0) {
            this.balance.classList.remove('showGreen', 'showBlack');
            this.balance.classList.add('showRed');
        }
        else if (total > 0) {
            this.balance.classList.remove('showRed', 'showBlack');
            this.balance.classList.add('showGreen');
        }
        else if (total === 0) {
            this.balance.classList.remove('showRed', 'showGreen');
            this.balance.classList.add('showBlack');
        }
    }
}