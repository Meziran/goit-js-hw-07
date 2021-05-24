const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

outputRef.textContent = `незнакомец`;

inputRef.addEventListener('input', change);

function change(event) {
    event.currentTarget.value.trim() !== '' ?
        (outputRef.textContent = event.currentTarget.value) :
        (outputRef.textContent = 'незнакомец');
}