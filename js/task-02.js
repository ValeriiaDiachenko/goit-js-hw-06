const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"]

const ingredientsRef = document.querySelector("#ingredients")

const makeListIngredints = ingredients.map((ingredient) => {
  const list = document.createElement("li")
  list.classList.add("item")
  list.textContent = `${ingredient}`
  return list
})
ingredientsRef.append(...makeListIngredints)
console.log(makeListIngredints)