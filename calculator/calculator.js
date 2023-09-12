window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const principle = document.getElementById("loan-amount");
  const years = document.getElementById("loan-years");
  const rate = document.getElementById("loan-rate");
  principle.value = 10000;
  years.value = 10;
  rate.value = .1;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = values.amount;
  const i = values.rate / 12;
  const n = values.years * 12;
  const monthlyPayment = (
    (p*i)/(1-(Math.pow((1+i),-n)))
  ).toFixed(2);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const formOutput = document.getElementById('monthly-payment');
  if(typeof monthly === 'number'){
    formOutput.innerText = `$${monthly}`;
  } else {
    throw new Error('Please ensure only numbers are put in the inputs. We do not accept symbols or letters.');
  }
}
