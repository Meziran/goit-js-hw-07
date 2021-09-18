
 //const counter = document.querySelector('#counter');
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const value = document.querySelector('#value')
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
