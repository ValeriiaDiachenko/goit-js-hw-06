let counter = 0;
const counterValue = document.querySelector("#value");
const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
buttonDecrement.addEventListener('click', () => {
    counter -= 1;
    counterValue.textContent = counter;
});
buttonIncrement.addEventListener('click', () => {
    counter += 1;
    counterValue.textContent = counter;
});
