const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

for (const ingredient of ingredients) {
  const list = document.createElement('li');
  list.textContent = ingredient;
  list.classList = "item";

  const ingredientsRef = document.querySelector('#ingredients');
ingredientsRef.append(list);
}
