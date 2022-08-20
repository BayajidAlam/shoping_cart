function updateCaseNumber(isIncrease){
  const caseNumberField = document.getElementById('case-number-field');
const caseNuberString = caseNumberField.value;
const previousCaseNumber = parseInt(caseNuberString);

let newCaseNumber;
if(isIncrease === true){
  newCaseNumber = previousCaseNumber + 1;
}
else{
  newCaseNumber = previousCaseNumber - 1;
}
caseNumberField.value = newCaseNumber;
return newCaseNumber;
}

function UpdateCaseTotalPrice(newCaseNumber){
  const caseTotalPrice = newCaseNumber * 59;
  const caseTotalElement = document.getElementById('case-total');
  caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
  const newCaseNumber =  updateCaseNumber(true);
  UpdateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
  const newCaseNumber = updateCaseNumber(false);
  UpdateCaseTotalPrice(newCaseNumber);
  calculateSubTotal();
})