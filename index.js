const expense = document.querySelector(".expense");
const amount = document.querySelector(".amount");
const add = document.querySelector(".add");
const result = document.querySelector(".result");
const allExpenses = document.querySelector(".all-expenses");

let totalAmount = 0;
let i = 0;
const array = [];

const expenseApp = () => {
  if((expense.value != "") && (amount.value != "")){
  const expenseObj = {};
  const expenseEl = expense.value;
  const amountEl= parseInt(amount.value);
  
  expenseObj.desc = expenseEl;
  expenseObj.amt = amountEl; 
  expenseObj.classname = `cross-${i++}`;
  array.push(expenseObj);
 
   const arrayObj = array.map(items => {
     return `<div class="description">
                <p>${items.desc}</p> <p>${items.amt}</p>
                <button class=${items.classname}><i class="far fa-trash-alt"></i></button>
              </div>`});
 
              
  const arrayObjJoin = arrayObj.join('');
  allExpenses.innerHTML = arrayObjJoin;  
  totalAmount += amountEl;
  result.textContent = "Total Expense : " + totalAmount;
  
  expense.value = "";
  amount.value = "";
    } 
  }  
 
 
 const deleteApp = (e) =>{
   let some = e.target.className;
    array.forEach((lists) =>{
       if(lists.classname === some){
          totalAmount = totalAmount - lists.amt;
          result.textContent = "Total Expense : " + totalAmount;
      
      const arrayIndex = array.findIndex((x)=> x.classname === some);
      array.splice(arrayIndex, 1);
      
      const arrayFiltered = array.map(items =>{
       return `<div class="description">
                <p>${items.desc}</p> </p>${items.amt}</p>
                <button class=${items.classname}> <i class="far fa-trash-alt"></i> </button>
              </div>`;
     });
      
      const arrayFilteredJoin = arrayFiltered.join('');
      allExpenses.innerHTML= arrayFilteredJoin;
      
      }     
  });
} 
 
allExpenses.addEventListener('click', deleteApp);
add.addEventListener('click', expenseApp);
