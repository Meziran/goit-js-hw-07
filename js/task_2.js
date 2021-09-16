const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
//Напиши скрипт, который для каждого элемента массива
//ingredients создаст отдельный li, после чего вставит все li
//за одну операцию в список ul.ingredients. Для создания DOM-узлов
//используй document.createElement()
const ulEl = document.querySelector("#ingredients");
console.log(ulEl);

const ingredientsEl = ingredients.map((ingredient) => {
  const newLi = document.createElement("li");
  newLi.textContent = ingredient;
  return newLi;
});

ulEl.append(...ingredientsEl);
