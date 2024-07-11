let confirmBtn = document.querySelector('.submit');
let nameInput = document.querySelector('#name-input');
let numberInput = document.querySelector('.number-input');
let month = document.querySelector('.month');
let year = document.querySelector('.year');
let cvc = document.querySelector('.cvc');
let cardNumber = document.querySelector('.c-number');
let ownerName = document.querySelector('.name');
let error1 = document.querySelector('.er1');
let error2 = document.querySelector('.er2');
let date = document.querySelector('.date');
let ryear = document.querySelector('.ryear');
let cvv = document.querySelector('.cvv');
let nameText = document.querySelector('.name');
let form = document.querySelector('form');
let thankYou = document.querySelector('.second');
let subBtn = document.querySelector('.submit');

const validateForm = () => {
    // Check number input
    const isNumberValid = numberInput.value.match(/^[0-9 ]*$/) && numberInput.value.replace(/\s+/g, '').length === 16;
    
    // Check month input
    const isMonthValid = month.value.match(/^[0-9]{1,2}$/) && month.value <= 12;
    
    // Check year input
    const isYearValid = year.value.match(/^[0-9]{2}$/);
    
    // Check CVC input
    const isCVCValid = cvc.value.match(/^[0-9]{3}$/);
    
    // Check name input
    const isNameValid = nameInput.value !== '';
    
    // Enable or disable submit button
    subBtn.disabled = !(isNumberValid && isMonthValid && isYearValid && isCVCValid && isNameValid);
}

numberInput.addEventListener('input', () => {
    if (numberInput.value.match(/^[0-9 ]*$/)) {
        let cleanedValue = numberInput.value.replace(/\s+/g, '');

        // Format the input value with spaces after every 4 digits
        numberInput.value = cleanedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
        cardNumber.value = numberInput.value;
        numberInput.classList.remove('border-red');

        numberInput.nextElementSibling.style.display = 'none';
    } else {
        numberInput.nextElementSibling.style.display = 'block';
        numberInput.classList.add('border-red');
    }
    validateForm();
});

month.addEventListener('input', () => {
    if (!month.value.match(/^[0-9]*$/)) {
        month.value = month.value.replace(/[^0-9]/g, '');
        month.nextElementSibling.style.display = 'block';
        month.classList.add('border-red');
    } else if (month.value > 12 || month.value.length > 2) {
        month.nextElementSibling.style.display = 'block';
        month.classList.add('border-red');
    } else {
        month.classList.remove('border-red');
        month.nextElementSibling.style.display = 'none';
    }
    validateForm();
});

year.addEventListener('input', () => {
    if (!year.value.match(/^[0-9]*$/)) {
        year.value = year.value.replace(/[^0-9]/g, '');
        year.nextElementSibling.style.display = 'block';
        year.classList.add('border-red');
    } else if (year.value.length > 2) {
        year.nextElementSibling.style.display = 'block';
        year.classList.add('border-red');
    } else {
        year.classList.remove('border-red');
        year.nextElementSibling.style.display = 'none';
    }
    validateForm();
});

cvc.addEventListener('input', () => {
    if (!cvc.value.match(/^[0-9]*$/)) {
        cvc.value = cvc.value.replace(/[^0-9]/g, '');
        cvc.nextElementSibling.style.display = 'block';
        cvc.classList.add('border-red');
    } else if (cvc.value.length > 3) {
        cvc.nextElementSibling.style.display = 'block';
        cvc.classList.add('border-red');
    } else {
        cvc.classList.remove('border-red');
        cvc.nextElementSibling.style.display = 'none';
    }
    validateForm();
});

nameInput.addEventListener('input', () => {
    if (nameInput.value !== '') {
        nameInput.classList.remove('border-red');
        nameInput.nextElementSibling.style.display = 'none';
    } else {
        nameInput.nextElementSibling.style.display = 'block';
        nameInput.classList.add('border-red');
    }
    validateForm();
});

// Updating card number, month, year, and CVC display fields
numberInput.addEventListener('input', () => {
    cardNumber.textContent = numberInput.value;
    validateForm();
});

month.addEventListener('input', () => {
    date.textContent = month.value;
    validateForm();
});

year.addEventListener('input', () => {
    ryear.textContent = year.value;
    validateForm();
});

cvc.addEventListener('input', () => {
    cvv.textContent = cvc.value;
    validateForm();
});

nameInput.addEventListener('input', () => {
    ownerName.textContent = nameInput.value;
    validateForm();
});
