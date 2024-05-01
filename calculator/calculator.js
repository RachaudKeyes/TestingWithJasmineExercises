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

  // Arbitrary Values
  const formValues = {amount: 10000, years: 5, rate: 5.0};

  // Values from Form
  const inputAmount = document.getElementById('loan-amount');
  inputAmount.value = formValues.amount;

  const inputYears = document.getElementById('loan-years');
  inputYears.value = formValues.years;

  const inputRate = document.getElementById('loan-rate');
  inputRate.value = formValues.rate;

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

  // Conversions for the monthly payment equation
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years *12);
  
  return(
    (values.amount * monthlyRate) /
    (1 - ((1 + monthlyRate)**(-n)))
    ).toFixed(2);                             // rounds string to 2 decimal places
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyForm = document.getElementById('monthly-payment');
  monthlyForm.innerText = `$ ${monthly}`;
}
