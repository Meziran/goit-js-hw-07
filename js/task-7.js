const sizeControlRef = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text');

sizeControlRef.addEventListener('input', resize);

function resize(event) {
    textSize.style.fontSize = `${event.currentTarget.value}px`;
}