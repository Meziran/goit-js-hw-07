let inputEl = document.querySelector('#name-input');
let outputEl = document.querySelector('#name-output');
const notChange = `незнакомец`;

inputEl.addEventListener('input', changeInput);

function changeInput(event) {
 
//    if (event.currentTarget.value.trim() !== '') {
//    return outputEl.textContent =
//     event.currentTarget.value
//    } else {return notChange };

event.currentTarget.value.trim() !== '' ? outputEl.textContent = event.currentTarget.value : notChange.textContent;
};