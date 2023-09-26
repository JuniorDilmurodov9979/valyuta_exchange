let elForm = document.querySelector('.form');
let elInput = document.querySelector('.form__input');
let elSelect = document.querySelector('.form__select');
let elOutput = document.querySelector('.output');

let currencyUsd = 12200; 
let currencyEuro = 13000; 
let currencyRubl = 127; 

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    let inputValue = +elInput.value;
    let selectValue = +elSelect.value;
    let convert = inputValue / selectValue;
    
    if(elSelect.value == 'USD') {
        convert = elInput.value / currencyUsd;
        elOutput.textContent = convert.toFixed(2);
    } else if (elSelect.value == 'Euro') {
        convert = elInput.value / currencyEuro;
        elOutput.textContent = convert.toFixed(2);
    } else if (elSelect.value == 'Rubl') {
        convert = elInput.value / currencyRubl;
        elOutput.textContent = convert.toFixed(2);
    }
});