const cardNumInput = document.querySelector('#card-number');
const cardholderInput = document.querySelector('#name');
const cardCvcInput = document.querySelector('#cvc');
const cardMonthInput = document.querySelector('#exp-month');
const cardYearInput = document.querySelector('#exp-year');

const cardNum = document.querySelector('.card-num');
const cardholder = document.querySelector('.cardholder');
const cardMonth = document.querySelector('#month');
const cardYear = document.querySelector('#year');
const cardCvc = document.querySelector('.card-cvc');

const confirmBtn = document.querySelector('.btn-primary-custom');
const form = document.querySelector('#box-1');
const complete = document.querySelector('#box-2');

cardNumInput.addEventListener('input', () => {
    if (cardNumInput.value.length < 5) {
        let numSet = cardNum.querySelector(`#numset1`);
        numSet.innerHTML = cardNumInput.value;
    } else if (cardNumInput.value.length > 4 && cardNumInput.value.length < 9) {
        let numSet = cardNum.querySelector(`#numset2`);
        numSet.innerHTML = cardNumInput.value.slice(4, 8);
    } else if (cardNumInput.value.length > 8 && cardNumInput.value.length < 13) {
        let numSet = cardNum.querySelector(`#numset3`);
        numSet.innerHTML = cardNumInput.value.slice(8, 12);
    } else if (cardNumInput.value.length > 12 && cardNumInput.value.length < 17) {
        let numSet = cardNum.querySelector(`#numset4`);
        numSet.innerHTML = cardNumInput.value.slice(12, 16);
    }
})
cardholderInput.addEventListener('input', () => {
    cardholder.innerHTML = cardholderInput.value;
    if (cardholderInput.value === '') {
        cardholder.innerHTML = 'Jane Appleseed';
    }
})
cardCvcInput.addEventListener('input', () => {
    cardCvc.innerHTML = cardCvcInput.value;
    if (cardCvcInput.value === '') {
        cardCvc.innerHTML = '000';
    }
})
cardMonthInput.addEventListener('input', () => {
    cardMonth.innerHTML = cardMonthInput.value;
    if (cardMonthInput.value === '') {
        cardMonth.innerHTML = '00';
    }
})
cardYearInput.addEventListener('input', () => {
    cardYear.innerHTML = cardYearInput.value;
    if (cardYearInput.value === '') {
        cardYear.innerHTML = '00';
    }
})

confirmBtn.addEventListener('click', (e) => {
    if (cardNumInput.value == '') {
        return false;
    } else if (cardholderInput.value == '') {
        cardholderInput.style.borderColor = 'red';
        return false;
    } else if (cardMonthInput.value == '') {
        return false;
    }
    else if (cardYearInput.value == '') {
        return false;
    }
    else if (cardCvcInput.value == '') {
        return false;
    }
    else {
        form.style.display = 'none';
        complete.style.display = 'block';
        e.preventDefault();
    }
})


