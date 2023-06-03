// Get DOM Elements
const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountCurrencyTwo = document.getElementById('amount-two');
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch Exchange Rates & Update the DOM
function calculate() {
    // Get the Currency Code for currency 1 and 2
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;

    // Send Request to ExchangeRate-API for conversion rates for currency one
    fetch(`https://v6.exchangerate-api.com/v6/a43d02c063c1303f1c06c071/pair/${currencyOneCode}/${currencyTwoCode}`)
        .then(res => res.json())
        .then(data => {
          //get conversion rate
          const conversionRate = data.conversion_rate;
          rate.innerText = `1 ${currencyOneCode}=${conversionRate} ${currencyTwoCode}`;
          //update the currency
          const curformat = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyTwoCode }).format((amountCurrencyOne.value * conversionRate).toFixed(2));
          amountCurrencyTwo.value = curformat;
        });
};

// Event Listeners
// Recalculate exchange rate when currency 1 changes
currencyOne.addEventListener('change', calculate);
// Recalculate exchange amount when currency 1 amount changes
amountCurrencyOne.addEventListener('input', calculate);
// Recalculate exchange rate when currency 2 changes
currencyTwo.addEventListener('change', calculate);
// Recalculate exchange amount when currency 2 amount changes
amountCurrencyTwo.addEventListener('input', calculate);

swap.addEventListener('click',()=>{
     //save value of cuurency1 to temp variable
     const temp = currencyOne.value;
     //copy currency2 to currency1
     currencyOne.value = currencyTwo.value;
     //copy currency1 from temp to currency2
     currencyTwo.value =temp;
     //recalculate exchange rate;
     calculate()

})


// Execute calculate function on page load
calculate();