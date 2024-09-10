// Fetch all available currencies from the API
const apiKey = '808bf6ff367c85dbc011a6dc';  // Replace with your actual API key
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const amountInput = document.getElementById('amount');
const resultText = document.getElementById('resultText');
const convertBtn = document.getElementById('convertBtn');
const switchBtn = document.getElementById('switchBtn');

// Fetch the list of currencies and populate the select dropdowns
async function fetchCurrencies() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/codes`);
    const data = await response.json();
    
    if (data.result === "success") {
        populateCurrencySelect(data.supported_codes);
    } else {
        resultText.innerHTML = 'Error fetching currencies.';
    }
}

// Populate the "From" and "To" select options
function populateCurrencySelect(currencies) {
    currencies.forEach(currency => {
        const optionFrom = document.createElement('option');
        const optionTo = document.createElement('option');
        optionFrom.value = currency[0];
        optionTo.value = currency[0];
        optionFrom.text = currency[1];
        optionTo.text = currency[1];
        fromCurrency.add(optionFrom);
        toCurrency.add(optionTo);
    });
}

// Fetch the exchange rate and display the result
async function convertCurrency() {
    const fromValue = fromCurrency.value;
    const toValue = toCurrency.value;
    const amount = amountInput.value || 1;

    const response = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${fromValue}/${toValue}/${amount}`);
    const data = await response.json();

    if (data.result === "success") {
        const conversionRate = data.conversion_rate;
        const convertedAmount = data.conversion_result;
        resultText.innerHTML = `${amount} ${fromValue} = ${convertedAmount} ${toValue}`;
    } else {
        resultText.innerHTML = 'Error fetching exchange rate.';
    }
}

// Swap the currencies when the switch button is clicked
switchBtn.addEventListener('click', () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
});

// Event listener for conversion button
convertBtn.addEventListener('click', convertCurrency);

// Fetch the currencies on page load
fetchCurrencies();
