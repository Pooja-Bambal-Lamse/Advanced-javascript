var expenseArr = [];
var div = document.getElementById('arrayobj');
function addExpense() {
    let amt = document.getElementById('amt').value;
    let des = document.getElementById('des').value;
    let cat = document.getElementById('cat').value;

    let expObj = { Amount: amt, Description: des, Category: cat }
    expenseArr.push(expObj);
    console.log(expenseArr);
    
    div.innerHTML=""
  
    for (var i = 0; i < expenseArr.length; i++) {
        div.innerHTML += `
        <label for="Movie">${expenseArr[i].Amount}</label>
        <label for="Movie">${expenseArr[i].Description}</label>
        <label for="Movie">${expenseArr[i].Category}</label>
            <button type="click" onclick="deleteExpense(${i})">Delete Expense</button>
            <button type="click">Edit Expense</button>
            <br>
`;
    }

}       
function deleteExpense(i){
    expenseArr.pop(expenseArr[i]);
    div.innerHTML=""
  
    for (var i = 0; i < expenseArr.length; i++) {
        div.innerHTML += `
        <label for="Movie">${expenseArr[i].Amount}</label>
        <label for="Movie">${expenseArr[i].Description}</label>
        <label for="Movie">${expenseArr[i].Category}</label>
            <button type="click" onclick="deleteExpense(${i})">Delete Expense</button>
            <button type="click">Edit Expense</button>
            <br>
`;}
    console.log(expenseArr);
}