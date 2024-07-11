let confirmBtn = document.querySelector('.submit');
let nameInput = document.querySelector('#name-input');
let numberInput = document.querySelector('.number-input');
let month = document.querySelector('.month');
let year = document.querySelector('.year');
let cvc = document.querySelector('.cvc');
let cardNumber = document.querySelector('.c-number');
let ownerName = document.querySelector('.name');
let error1=document.querySelector('.er1')
let error2=document.querySelector('.er2')
let date=document.querySelector('.date')
let ryear=document.querySelector('.ryear')
let cvv=document.querySelector('.cvv')
let nameText=document.querySelector('.name')
let form=document.querySelector('form')
let thankYou=document.querySelector('.second')
let subBtn=document.querySelector('.submit')

const validateForm = () => {
    // Check number input
    const isNumberValid = numberInput.value.match(/^[0-9 ]*$/) && numberInput.value.replace(/\s+/g, '').length === 16;
    
    // Check month input
    const isMonthValid = month.value !== '';
    
    // Check year input
    const isYearValid = year.value !== '';
    
    // Check CVC input
    const isCVCValid = cvc.value !== '';
    
    // Check name input
    const isNameValid = nameInput.value !== '';
    
    // Enable or disable submit button
    subBtn.disabled = !(isNumberValid && isMonthValid && isYearValid && isCVCValid && isNameValid);
}

numberInput.addEventListener('keyup', () => {
    if (numberInput.value.match(/^[0-9 ]*$/)) {
        let cleanedValue = numberInput.value.replace(/\s+/g, '');

        // Format the input value with spaces after every 4 digits
        numberInput.value = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
        cardNumber.value = numberInput.value;
        numberInput.classList.remove('border-red')

        numberInput.nextElementSibling.style.display = 'none';
    } else {
        numberInput.nextElementSibling.style.display = 'block';
        numberInput.classList.add('border-red')
    }
    validateForm();
});  ensure that except name field no one filed can accept string
