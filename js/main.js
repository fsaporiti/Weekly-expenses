const form = document.querySelector("#transactionForm")

const insertRowTable = (transactionObj) => {
    let tableRef = document.querySelector("#table")
    let newRowRef = tableRef.insertRow(-1) //insert row 
    let newCellRef = newRowRef.insertCell(0)  //insert cell (in the positions 0, 1, 2, 3)
    newCellRef.textContent = transactionObj["formIncomeExpense"] //add the text put in the form in each cell
    newCellRef = newRowRef.insertCell(1)
    newCellRef.textContent = transactionObj["formDescription"]
    newCellRef = newRowRef.insertCell(2)
    newCellRef.textContent = transactionObj["formAmount"]
    newCellRef = newRowRef.insertCell(3)
    newCellRef.textContent = transactionObj["formCategory"]
}

const convertFormDataToObj = (transactionFormData) => {
    let formIncomeExpense = transactionFormData.get("formIncomeExpense")
    let formDescription = transactionFormData.get("formDescription")
    let formAmount = transactionFormData.get("formAmount")
    let formCategory = transactionFormData.get("formCategory")
    //return obj with the content in the form
    return { 
        "formIncomeExpense": formIncomeExpense,
        "formDescription": formDescription,
        "formAmount": formAmount,
        "formCategory": formCategory
    }
}

const saveTransactionObj = (transactionObj) => {
    let transactionArray = JSON.parse(localStorage.getItem("transactionData")) || []
    transactionArray.push(transactionObj)
    let arrayToJSON = JSON.stringify(transactionArray) // convert array to JSON
    localStorage.setItem("transactionData", arrayToJSON) //save my array-JSON to LStorage 
}


form.addEventListener ("submit", (e) => {
    e.preventDefault()
    let transactionFormData = new FormData(form)
    let transactionObj = convertFormDataToObj(transactionFormData)
    saveTransactionObj (transactionObj) // save data in LStorage
    insertRowTable(transactionObj) // insert ROW with form's data
 
    })


   