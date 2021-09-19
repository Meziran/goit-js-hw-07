const size = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

size.addEventListener("input", resize);
function resize(e) {
  text.style.fontSize = `${e.currentTarget.value}px`;
}
