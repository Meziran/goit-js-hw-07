const inpurRef = document.querySelector('#validation-input');

inpurRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const valueLength = event.currentTarget.value.length;
    const valueDataLength = Number(inpurRef.getAttribute('data-length'));
    if (valueDataLength === valueLength) {
        inpurRef.classList.add('valid');
        inpurRef.classList.remove('invalid');
    } else {
        inpurRef.classList.add('invalid');
        inpurRef.classList.remove('valid');
    }
}