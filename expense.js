let expense_amount = document.getElementById("expense_amount")
let expense_btn = document.getElementById("expense_btn")
let show_history = document.getElementById("show_history")
let history_table = document.getElementById("history_table")


let personBalance = {
    name: "Nurlana",
    balance: 2000,
    cashback: 0,
    cashBackHistory: [],
    calcCash: function (amount) {
        let new_cashback = amount * 3 / 100;
        this.cashback = this.cashback + new_cashback
        this.balance = this.balance - amount;
        let history_element = {
            date: new Date(),
            cashback: new_cashback,
            new_balance: this.balance,
            total_cashback: parseFloat(this.cashback,2),
            amount: amount
        }
        this.cashBackHistory.push(history_element)
    },
    showCashbackList: function () {
        return this.cashBackHistory
    }
}


expense_btn.addEventListener("click", function () {
    let amount = expense_amount.value;
    expense_amount.value = ""
    return personBalance.calcCash(amount)
})
show_history.addEventListener("click", function () {
    let content = personBalance.showCashbackList()
    let new_content = content.map((item, index) => {
        return `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${item.amount} AZN</td>
            <td>${item.cashback} AZN</td>
            <td>${item.new_balance} AZN</td>
            <td>${item.date.getDate()}-${item.date.getMonth()}-${item.date.getFullYear()}   ${item.date.getHours()}:${item.date.getMinutes()}</td>
            <td>${item.total_cashback}</td>
        </tr>
        `
    }).join('')
    return history_table.innerHTML = new_content
})