let inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", changeInputElLength);

function changeInputElLength(e) {
  const inputElLength = Number(inputEl.getAttribute("data-length"));
  const currentLength = e.currentTarget.value.length;
  if (inputElLength == currentLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
