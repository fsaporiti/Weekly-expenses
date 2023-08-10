const form = document.querySelector("#transactionForm")

const insertRowTable = (transactionFormData) => {
    let tableRef = document.querySelector("#table")
    //insert row 
    let newRowRef = tableRef.insertRow(-1)

    //nsert cell (in the positions 0, 1, 2, 3)
    let newCellRef = newRowRef.insertCell(0)

    //add the text put in the form in each cell
    newCellRef.textContent = transactionFormData.get("formIncomeExpense")
    newCellRef = newRowRef.insertCell(1)
    newCellRef.textContent = transactionFormData.get("formDescription")
    newCellRef = newRowRef.insertCell(2)
    newCellRef.textContent = transactionFormData.get("formAmount")
    newCellRef = newRowRef.insertCell(3)
    newCellRef.textContent = transactionFormData.get("formCategory")
}

form.addEventListener ("submit", (e) => {
   e.preventDefault()

   let transactionFormData = new FormData(form)
   insertRowTable(transactionFormData)

   })

   