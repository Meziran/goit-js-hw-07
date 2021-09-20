const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueRef = document.querySelector('#value');
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrement);

incrementBtn.addEventListener('click', increment);