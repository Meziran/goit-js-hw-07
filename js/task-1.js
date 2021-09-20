const allDocEl = document.querySelector("#categories");
console.log(`В списке ${allDocEl.children.length} категории.`);

const itemEl = document.querySelectorAll(".item");
itemEl.forEach((item) => {
  console.log(`Категория: ${item.querySelector("h2").textContent}`);
  console.log(`Количество ${item.querySelectorAll("li").length}`);
});
