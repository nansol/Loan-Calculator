document.getElementById('loan-form').addEventListener('submit', function(e){

document.getElementById('results').style.display = 'none';
document.getElementById('loading').style.display = 'block';
setTimeout(calculateResults, 2000);

e.preventDefault();

});

function calculateResults(){

let amount = document.getElementById('amount');
let interest = document.getElementById('interest');
let years = document.getElementById('years');


let monthlyPayment = document.getElementById('monthly-payment');
let totalPayment = document.getElementById('total-payment');
let totalInterest = document.getElementById('total-interest');


let amountInput = parseFloat(amount.value);
let interestInput = parseFloat(interest.value) / 100 / 12;
let yearsInput = parseFloat(years.value) * 12;


let x = Math.pow(1 + interestInput, yearsInput);
let monthly = (amountInput * x * interestInput)/(x-1);


if(isFinite(monthly)){
monthlyPayment.value = monthly.toFixed(2);
totalPayment.value = (monthly * yearsInput).toFixed(2)
totalInterest.value = ((monthly *  yearsInput)-amountInput).toFixed(2); 

document.getElementById('results').style.display = 'block';
document.getElementById('loading').style.display = 'none';


} else {
msgError('Please check your numbers');
}}

function msgError(error){

document.getElementById('results').style.display = 'none';
document.getElementById('loading').style.display = 'none';

let errorDiv = document.createElement('div');


let card = document.querySelector('.card');
let heading = document.querySelector ('.heading');


errorDiv.className = 'alert alert-danger';
errorDiv.appendChild(document.createTextNode(error));

card.insertBefore(errorDiv, heading);

setTimeout(clearError,1000)
}

function clearError(){
  document.querySelector('.alert').remove();
}