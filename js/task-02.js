const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatoes',
  'Herbs',
  'Condiments',
];

const titleList = document.querySelector('#ingredients');

const arr = [];

ingredients.forEach(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  arr.push(itemEl);
}
);

titleList.prepend(...arr);