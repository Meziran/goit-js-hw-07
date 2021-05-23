const allEl = document.querySelector('#categories');
console.log(`В списке ${allEl.children.length} категории.`);

// const itemRef = document.querySelectorAll('.item');
// itemRef.forEach(item => {
//     console.log(`Категория: ${item.firstElementChild.textContent}`);
//     console.log(`Количество элементов:  ${item.lastElementChild.children.length}`);
// });

const itemRef = document.querySelectorAll('.item');
itemRef.forEach(item => {
  console.log(`Категория: ${item.querySelector('h2').textContent}`);
  console.log(`Количество элементов:  ${item.querySelectorAll('li').length}`);
});
